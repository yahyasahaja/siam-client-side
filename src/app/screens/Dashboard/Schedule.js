//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'

//STYLE
import style from './css/schedule.scss'

//COMPONENTS
import ClosableCard from '../../components/ClosableCard'
import Loading from '../../components/Loading'

//INNER_CONFIG
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//COMPONENT
export default class Shcedule extends Component {
  componentDidMount() {
    axios.get('/json/mahasiswa.json').then((res, i) => {
      this.setState({
        schedule: res.data
      })
    })
  }

  state = {
    schedule: null,
  }

  renderCards() {
    let { schedule } = this.state
    
    if (!schedule) return 
    
    let data = schedule.sesi_kuliah
    let parsedData = []

    parsedData.push(data.Mon ? data.Mon : null)
    parsedData.push(data.Tue ? data.Tue : null)
    parsedData.push(data.Wed ? data.Wed : null)
    parsedData.push(data.Thu ? data.Thu : null)
    parsedData.push(data.Fri ? data.Fri : null)
    parsedData.push(data.Sat ? data.Sat : null)

    return _.map(parsedData, (data, i) => {
      if (!data || i > 5) return 
      return (
        <ClosableCard title={days[i]} key={i}>
          {this.renderItem(data)}
        </ClosableCard>
      )
    })
  }

  renderItem(data) {
    return _.map(data, (res, i) =>
      <div className={style.item}>
        <div className={style.left}>
          <span>{res.nama}</span>
          <span>{`${res.gedung}${res.ruangan}`}</span>
        </div>

        <div className={style.right}>
          <span>{`${res.waktu_mulai.substr(0, 5)} - ${res.waktu_selesai.substr(0, 5)}`}</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        {!this.state.schedule ? <Loading circular wrapped={false} center /> :
        this.renderCards()}
      </div>
    )
  }
}