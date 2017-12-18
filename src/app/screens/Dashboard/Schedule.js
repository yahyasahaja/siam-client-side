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
    axios.get('/json/schedule.json').then((res, i) => {
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
    
    if (schedule) return _.map(schedule, (data, i) => {
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
          <span>{res.matkul}</span>
          <span>{res.ruang}</span>
        </div>

        <div className={style.right}>
          <span>{`${res.waktu_mulai} - ${res.waktu_selesai}`}</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        {this.state.schedule ? <Loading circular wrapped={false} center /> :
        this.renderCards()}
      </div>
    )
  }
}