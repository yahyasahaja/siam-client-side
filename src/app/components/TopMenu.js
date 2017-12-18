//MODULES
import React, { Component } from 'react'

//STYLE
import style from './css/floating-menu.scss'

//COMPONENTS

//COMPONENT
export default class TopMenu extends Component {
  state = {
    openMenu: false,
  }

  renderFloatingMenu() {
    if (this.state.openMenu) return
  }

  toggleOpenMenu = () => {
    this.setState({openMenu: !this.state.openMenu})
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.left}>
          <img src="/img/logo-ub.png" alt="LOGO UB"/>
          <h1>SIAM</h1>
        </div>

        <div className={style.right}>
          <span className="material-icons">account_circle</span>
          <span className={style.name}>Yahya Sahaja</span>
        </div>
      </div>
    );
  }
}