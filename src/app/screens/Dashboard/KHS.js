//MODULES
import React, { Component } from 'react'
import axios from 'axios'
import lodash from 'lodash'
import Dialog from 'react-toolbox/lib/dialog'

//STYLE
import style from './css/khs.scss'

//COMPONENTS
import Table from '../../components/Table'
import Loading from '../../components/Loading'
import Card from '../../components/SelectableCard'
/*
{
  header: ["a", "b"],
  content: [
    {
      link: "./",
      style: {},
      data: [

      ]
    }
  ],
}
    */
//COMPONENT
export default class KHS extends Component {
  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get('/json/khs.json').then(res => {
      this.setState({schedule: {
        header: ['Kode', 'Mata Kuliah', 'SKS', 'Nilai', 'Detail'],
        content: _.map(res.data.khs, (data, i) => {
          let rowData = []
          
          rowData.push(data.kode_matkul)
          rowData.push(data.matakuliah)
          rowData.push(data.sks)
          rowData.push(data.nilai_huruf)
          rowData.push(<div 
            className={style['detail-button']}
            onClick={() => {
              this.setState({active: true})

              axios.get('/json/classmate.json').then(res => {
                if (res.data.mahasiswa)
                this.setState({title: `${data.matakuliah} Classmate`, classmate: {
                  header: ['No', 'NIM', 'Nama'],
                  content: _.map(res.data.mahasiswa, (data, i) => {
                    return {data: [i + 1, data.nim, data.nama]}
                  })
                }})
              })
            }}
          >
            View
          </div>)

          return {
            data: rowData
          }
        }),
      }})
    })
  }

  renderModals() {
    let { active } = this.state
    
    if (!active) return
    return <Table data={this.state.classmate} />
  }

  state = {
    schedule: null,
    active: false,
    modalTitle: '',
    classmate: null,
  }

  onSemesterClicked = semester => {
    this.getData()
  }

  handleToggle = () => {
    this.setState({active: !this.state.active, classmate: null});
  }

  actions = [
    { label: "Close", onClick: this.handleToggle },
  ]

  renderTable() {
    if (this.state.schedule) return <Table data={this.state.schedule} />
    return <Loading circular wrapped={false} width={300} height={300} center/>
  }

  render() {
    return (
      <div className={style.container}>
        <Card onClick={this.onSemesterClicked}>
          {this.renderTable()}
        </Card>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title={this.state.modalTitle}
        >
          <div className={style['modals-wrapper']}>
          {
            this.state.classmate ? this.renderModals() : 
            <Loading circular wrapped={false} width="100%" height="300px" center/>
          }
          </div>
        </Dialog>
      </div>
    )
  }
}
