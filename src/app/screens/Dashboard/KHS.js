//MODULES
import React, { Component } from 'react'
import axios from 'axios'
import lodash from 'lodash'
import Dialog from 'react-toolbox/lib/dialog'

//STYLE
import style from './css/khs.scss'

//COMPONENTS
import Table from '../../components/Table'
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
        content: _.map(res.data, (data, i) => {
          let rowData = []
          
          rowData.push(data.kode)
          rowData.push(data.matkul)
          rowData.push(data.sks)
          rowData.push(data.nilai_huruf)
          rowData.push(<div 
            className={style['detail-button']}
            onClick={() => {
              this.setState({active: true})

              axios.get('/json/classmate.json').then(res => {
                console.log(res.data)
                this.setState({title: `${data.matkul} Classmate`, classmate: {
                  header: ['No', 'NIM', 'Nama'],
                  content: _.map(res.data, (data, i) => {
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

  render() {
    return (
      <div className={style.container}>
        <Card onClick={this.onSemesterClicked}>
          <Table data={this.state.schedule} />
        </Card>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title={this.state.modalTitle}
        >
          <div className={style['modals-wrapper']}>
          {this.renderModals()}
          </div>
        </Dialog>
      </div>
    )
  }
}
