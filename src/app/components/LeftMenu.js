//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

//STYLE
import style from './css/left-menu.scss'

//COMPONENTS

//INNER_CONFIG
const menuData = [
  { icon: 'home', link: '/dashboard/home' },
  { icon: 'date_range', link: '/dashboard/schedule' },
]

//COMPONENT
export default class LeftMenu extends Component {
  state = {
    selected: 0,
  }

  componentDidMount() {
    let path = this.props.history.location.pathname

    if (path.indexOf('home') != -1) this.setState({selected: 0})
    else if (path.indexOf('schedule') != -1) this.setState({selected: 1})
  }

  renderMenuItem() {
    let selected = this.state.selected

    return _.map(menuData, (data, i) => 
      <Link 
        className={`${style.item} ${selected == i ? style.active : ''}`} 
        to={data.link} key={i}
        onClick={() => this.setState({selected: i})}
      >
        <span className="material-icons">{data.icon}</span>
      </Link>
    )
  }

  render() {
    return (
      <div className={style.container}>
        {this.renderMenuItem()}
      </div>
    )
  }
}