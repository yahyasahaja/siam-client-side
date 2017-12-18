//MODULES
import React, { Component } from 'react'
import axios from 'axios'

//STYLE
import style from './css/khs.scss'

//COMPONENTS
import Table from '../../components/Table'
import Card from '../../components/SelectableCard'

//COMPONENT
export default class KHS extends Component {
  componentDidMount() {
    // axios.get('')
  }

  render() {
    return (
      <div className={style.container}>
        <Card>
          <Table />
        </Card>
      </div>
    )
  }
}
