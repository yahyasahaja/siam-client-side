//MODULES
import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'
import Checkbox from 'react-toolbox/lib/checkbox'
import {Button, IconButton} from 'react-toolbox/lib/button'

//STYLE
import style from './login.scss'
import theme from '../../css/common-button.scss'

//COMPONENT
export default class Login extends Component {
  state = {
    username: null,
    password: null,
    remember: false,
  }

  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('submitted')
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <span>LOGIN</span>
          </div>

          <form onSubmit={this.onSubmit}>
            <Input 
              name="username"
              label="Username" type="text" value={this.state.username}
              onChange={this.handleChange.bind(this, "username")} />
            <Input 
              name="password"
              label="Username" type="text" type="password" value={this.state.password}
              onChange={this.handleChange.bind(this, "password")} />

            <Checkbox
              label="Remember me"
              onChange={this.handleChange.bind(this, "remember")}
              checked={this.state.remember}
            />

            <Button label="LOGIN" primary raised theme={theme} type="submit" />
          </form>
        </div>
      </div>
    );
  }
}