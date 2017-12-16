//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//STYLE
import style from './css/index.scss'

//COMPONENTS
import FloatingMenu from './FloatingMenu'

//COMPONENT
export default class Menu extends Component {

  state = {
    openMenu: false,
  }

  renderFloatingMenu() {
    if (this.state.openMenu) return <FloatingMenu />
  }

  toggleOpenMenu = () => {
    this.setState({openMenu: !this.state.openMenu})
  }
  
  render() {
    return (
      <div className={style.container}>
        <div className={style['left-menu']}>
          <Link className={style.item} to="/dashboard/home">
            <span className="material-icons">home</span>
          </Link>
          <Link className={style.item} to="/dashboard/schedule">
            <span className="material-icons">date_range</span>
          </Link>
        </div>

        <div className={style.header}>
        <div className={style.left}>
          <img src="/img/logo-ub.png" alt="LOGO UB"/>
          <h1>SIAM</h1>
        </div>

        <div className={style.right} onClick={this.toggleOpenMenu}>
          <span className="material-icons">account_circle</span>
          <span className={style.name}>Yahya Sahaja</span>
          <span className="material-icons">keyboard_arrow_down</span>
        </div>
        </div>

        {this.renderFloatingMenu()}
      </div>
    )
  }
}