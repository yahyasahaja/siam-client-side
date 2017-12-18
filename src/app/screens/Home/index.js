//MODULES
import React, { Component } from 'react'

//STYLE
import style from './css/home.scss'

//COMPONENTS
import Berita from './Berita'
import Login from './Login'

//COMPONENT
export default class Home extends Component {
  render() {
    return (
      <div>
      <div className={style.container}>
        <Berita />
        <Login />
      </div>
      </div>
    );
  }
}