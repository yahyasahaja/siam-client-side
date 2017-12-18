//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'

//STYLE
import style from './css/berita.scss'

//COMPONENT
export default class Berita extends Component {
  componentDidMount() {
    axios.get('/json/news.json').then(res => {
      this.setState({news: res.data})
    })
  }
  
  state = {
    news: null,
  }

  renderBerita() {
    if (!this.state.news) return

    return _.map(this.state.news, (data ,i) =>
      <div className={style['news-item']} key={i}>
        <span className={"material-icons " + style.icon}>keyboard_arrow_right</span>
        <div className={style['title-wrapper']}>
          <a href={data.url} className={style.title}>{data.title}</a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <img src="/img/logo-ub.png" alt="Logo UB"/>
          <div className={style['wrapper-title']}>
            <h1>SIAM</h1>
            <p>UNIVERSITAS BRAWIJAYA</p>
          </div>
        </div>

        <div className={style['news-wrapper']}>
          <div className={style['news-header']}>
            <span className="material-icons">event</span>
            <span className={style.title}>Berita</span>
          </div>

          <div className={style['news-inner-wrapper']}>
            {this.renderBerita()}
          </div>
        </div>
        
        <div className={style['news-wrapper']}>
          <div className={style['news-header']}>
            <span className="material-icons">live_help</span>
            <span className={style.title}>Panduan</span>
          </div>

          <div className={style['news-inner-wrapper']}>
            <div className={style['news-item']}>
              <span className={"material-icons " + style.icon}>keyboard_arrow_right</span>
              <div className={style['title-wrapper']}>
                <a href="http://selma.ub.ac.id/panduan-mahasiswa/" className={style.title}>Klik di sini untuk melihat daftar panduan</a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.footer}>
          <span>Copyright &copy; 2017 <a href="https://ngopi.men">Ngopimen</a>. All Rights Reserved</span>
        </div>
      </div>
    );
  }
}