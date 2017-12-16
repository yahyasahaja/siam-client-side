//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//STYLE
import style from './css/index.scss'

//COMPONENTS
import Home from './Home'
import Schedule from './Schedule'
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'

//COMPONENT
export default class Dashboard extends Component {
  render() {
    return (
      <div className={style.container}>
        <Switch>
          <Redirect from="/dashboard" exact to="/dashboard/home" /> 
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/schedule" component={Schedule} />
        </Switch>
        <LeftMenu {...this.props} />
        <TopMenu />
      </div>
    )
  }
}