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
    axios.get('/json/mahasiswa.json').then(({ data }) => {
      console.log(data)
      if (data)
        this.setState({
          profile: [
            { title: 'Fakultas', desc: data.fakultas.nama },
            { title: 'Program Studi', desc: data.program_studi.nama },
            { title: 'Email', desc: `${data.mahasiswa.nim}@student.ub.ac.id` },
          ],
          profileHeader: {
            nama: data.mahasiswa.nama,
            nim: data.mahasiswa.nim,
            active: true,
          },
          dosbim: [
            { title: 'NIP', desc: data.mahasiswa.nip_pembimbing },
            { title: 'Ruang', desc: 'C1.3' },
            { title: 'Email', desc: 'wellypurnomo@ub.ac.id' },
          ],
          dosbimHeader: {
            nama: data.mahasiswa.dosen_pembimbing,
          },
          kaprodi: [
            { title: 'NIP', desc: '372853285'},
            { title: 'Ruang', desc: 'C1.3' },
            { title: 'Email', desc: 'dosen@ub.ac.id' },
          ],
          kaprodiHeader: {
            nama: data.program_studi.prodi,
          },
          dekan: [
            { title: 'NIP', desc: '372853285'},
            { title: 'Ruang', desc: 'C1.3' },
            { title: 'Email', desc: 'dosen@ub.ac.id' },
          ],
          dekanHeader: {
            nama: data.fakultas.dekan,
          },
        })
    })
  }

  state = {
    profile: null,
    profileHeader: {},
    dosbim: null,
    dosbimHeader: {},
    kaprodi: null,
    kaprodiHeader: {},
    dekan: null,
    dekanHeader: {},
  }

  renderActivation() {
    let { profileHeader } = this.state

    if (profileHeader) return profileHeader.active ? 'Active' : 'Inactive'
  }

  render() {
    let { profileHeader, dosbimHeader, kaprodiHeader, dekanHeader } = this.state

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
            </div>
          </div>
          
          <InfoShower data={this.state.dosbim} />
        </Card>

        <Card>
          <h1 className={style['card-title']}>Dekan</h1>
          <div className={style['dosbim-header']}>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{dekanHeader.nama}</span></div>
            </div>
          </div>
          
          <InfoShower data={this.state.dekan} />
        </Card>

        <Card>
          <h1 className={style['card-title']}>Kepala Program Studi</h1>
          <div className={style['dosbim-header']}>
            <div className={style.wrapper}>
              <div className={style.nama}><span>{kaprodiHeader.nama}</span></div>
            </div>
          </div>
          
          <InfoShower data={this.state.kaprodi} />
        </Card>
      </div>
    )
  }
}