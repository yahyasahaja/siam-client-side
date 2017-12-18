//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import Input from 'react-toolbox/lib/input'
import {Button, IconButton} from 'react-toolbox/lib/button'

//STYLE
import style from './css/home.scss'
import theme from '../../css/theme-button-blue.scss'

//COMPONENTS
import Card from '../../components/Card'

//COMPONENT
export default class Settings extends Component {
  componentDidMount() {
    axios.get('/json/profile.json').then(({ data }) => {
      if (data)
        this.setState({
          profileHeader: {
            nama: data.nama,
            nim: data.nim,
          }
        })
    })
  }

  state = {
    profile: null,
    profileHeader: {},
    newPassword: null,
    retypePassword: null,
    retypeErr: null,
    password: null,
  }

  handleChange = (name, value) => {
    if(name==='retypePassword'){
      if(value!==this.state.newPassword){
        return this.setState({retypeErr: 'Password did not match!', [name]: value}) 
      }
      else
        return this.setState({retypeErr: null, [name]: value})
    } else if (name == 'newPassword') {
      if (this.state.retypePassword != null) {
        if(value!==this.state.retypePassword){
          return this.setState({retypeErr: 'Password did not match!', [name]: value}) 
        }
        else
          return this.setState({retypeErr: null, [name]: value})
      }
    }
    this.setState({[name]: value})
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('submitted')
    if (this.state.retypePassword === this.state.newPassword) {
      //axios.post()
    }
  }

  render() {
    let { profileHeader } = this.state
    
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
        </div>
        <form onSubmit={this.onSubmit}>
            <Input 
              name="password"
              label="Password" type="password" value={this.state.password}
              onChange={this.handleChange.bind(this, "password")} />
            <Input 
              name="newPassword"
              label="New Password" type="text" type="password" value={this.state.newPassword}
              onChange={this.handleChange.bind(this, "newPassword")} />
            <Input 
              name="retypePassword" error={this.state.retypeErr}
              label="Retype New Password" type="text" type="password" value={this.state.retypePassword}
              onChange={this.handleChange.bind(this, "retypePassword")} />  

            <Button label="CHANGE" primary raised theme={theme} type="submit" />
          </form>
        </Card>
      </div>
    )
  }
}