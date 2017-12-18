//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'

//STYLE
import style from './css/khs.scss'

//COMPONENTS
import Card from '../../components/Card'

//COMPONENT
export default class khs extends Component {
  componentDidMount() {
    axios.get('/json/khs.json').then(({ data }) => {
      if (data)
        this.setState({
          khsHeader: {
            kode: data.kode,
            matkul: data.matkul,
            sks: data.sks,
            nilai: data.nilai
          }
        })
    })
  }

  state = {
    khsHeader: {},
  }

  render() {
    let { khsHeader } = this.state
    
    return (
      <div className={style.container}>

      </div>
    )
  }
}