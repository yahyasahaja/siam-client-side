//MODULES
import React, { Component } from 'react'
import _ from 'lodash'

//STYLE
import style from './css/info-shower.scss'

//COMPONENT
export default class InfoShower extends Component {
  renderData() {
    return _.map(this.props.data, (data, i) => {
      return (
        <div className={style.item} key={i}>
          <div className={style.title}><span>{data.title}</span></div>
          <div className={style.desc}><span>{data.desc}</span></div>
        </div>
      )
    })
  }

  render() {
    return (
     <div style={this.props.style} className={style.container}>
      {this.renderData()}
     </div> 
    )
  }
}