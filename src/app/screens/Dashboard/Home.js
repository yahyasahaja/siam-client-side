//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'

//STYLE
import style from './css/home.scss'

//COMPONENTS
import Card from '../../components/Card'
import InfoShower from '../../components/InfoShower'

//COMPONENT
export default class Home extends Component {
  componentDidMount() {
    axios.get('/json/profile.json').then(({ data }) => {
      if (data)
        this.setState({
          profile: [
            { title: 'Fakultas', desc: data.fakultas },
            { title: 'Program Studi', desc: data.program_studi },
            { title: 'Email', desc: data.email },
          ],
          profileHeader: {
            nama: data.nama,
            nim: data.nim,
            active: data.active,
          }
        })
    })

    axios.get('/json/dosbim.json').then(({data}) => {
      if (data)
        this.setState({
          dosbim: [
            { title: 'Ruang', desc: data.ruang},
            { title: 'Email', desc: data.email }
          ],
          dosbimHeader: {
            nama: data.nama,
            nip: data.nip,
          }
        })
    })
  }

  state = {
    profile: null,
    profileHeader: {},
    dosbim: null,
    dosbimHeader: {},
  }

  renderActivation() {
    let { profileHeader } = this.state

    if (profileHeader) return profileHeader.active ? 'Active' : 'Inactive'
  }

  render() {
    let { profileHeader, dosbimHeader } = this.state

    return (
      <div className={style.container}>
        <Card>
          <div className={style['profile-header']}>
            <div className={style.pic}>
              <span className={"material-icons " + style.img}>account_circle</span>
            </div>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{profileHeader.nama}</span></div>
              <div className={style.nim}><span>{profileHeader.nim}</span></div>
            </div>
            <div className={style.activation}><span>{this.renderActivation()}</span></div>
          </div>
          
          <InfoShower data={this.state.profile} />
        </Card>

        <Card>
          <h1 className={style['card-title']}>Dosen Pembimbing</h1>
          <div className={style['dosbim-header']}>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{dosbimHeader.nama}</span></div>
              <div className={style.nim}><span>{dosbimHeader.nim}</span></div>
            </div>
          </div>
          
          <InfoShower data={this.state.dosbim} />
        </Card>

        <Card>
          <h1 className={style['card-title']}>Dekan</h1>
          <div className={style['dosbim-header']}>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{dosbimHeader.nama}</span></div>
              <div className={style.nim}><span>{dosbimHeader.nim}</span></div>
            </div>
          </div>
          
          <InfoShower data={this.state.dosbim} />
        </Card>

        <Card>
          <h1 className={style['card-title']}>Kepala Program Studi</h1>
          <div className={style['dosbim-header']}>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{dosbimHeader.nama}</span></div>
              <div className={style.nim}><span>{dosbimHeader.nim}</span></div>
            </div>
          </div>
          
          <InfoShower data={this.state.dosbim} />
        </Card>
      </div>
    )
  }
}