//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

//COMPONENTS
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

//CONFIG
import { TOKEN_URI } from './config'

//COMPONENT
export default class AppRouter extends Component {
  componentWillMount() {
    let token = localStorage.getItem(TOKEN_URI)
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    if (token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/login" to="/" />
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}