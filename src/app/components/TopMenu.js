//MODULES
import React, { Component } from 'react'
import axios from 'axios'

//STYLE
import style from './css/floating-menu.scss'

//COMPONENTS

//COMPONENT
export default class TopMenu extends Component {
  componentDidMount() {
    axios.get('/json/mahasiswa.json').then(({ data }) => {
      console.log(data)
      if (data)
        this.setState({
          profileHeader: {
            nama: data.mahasiswa.nama,
          },
        })
    })
  }

  state = {
    openMenu: false,
    profileHeader: {},
  }

  renderFloatingMenu() {
    if (this.state.openMenu) return
  }

  toggleOpenMenu = () => {
    this.setState({openMenu: !this.state.openMenu})
  }

  render() {
    let { profileHeader } = this.state

    return (
      <div className={style.container}>
        <div className={style.left}>
          <img src="/img/logo-ub.png" alt="LOGO UB"/>
          <h1>SIAM</h1>
        </div>

        <div className={style.right}>
          <span className="material-icons">account_circle</span>
          <span className={style.name}>{profileHeader.nama}</span>
        </div>
      </div>
    );
  }
}