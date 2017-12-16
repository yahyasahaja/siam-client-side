//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//STYLE
import style from './css/left-menu.scss'

//COMPONENTS

//COMPONENT
export default class LeftMenu extends Component {
  render() {
    return (
      <div className={style.container}>
        <Link className={style.item} to="/dashboard/home">
          <span className="material-icons">home</span>
        </Link>
        <Link className={style.item} to="/dashboard/schedule">
          <span className="material-icons">date_range</span>
        </Link>
      </div>
    )
  }
}