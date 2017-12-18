//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

//STYLE
import style from './css/left-menu.scss'

//COMPONENTS

//INNER_CONFIG

//COMPONENT
export default class LeftMenu extends Component {
  componentDidMount() {
    let path = this.props.history.location.pathname

    if (path.indexOf('home') != -1) this.setState({selected: 0})
    else if (path.indexOf('schedule') != -1) this.setState({selected: 1})
    else if (path.indexOf('khs') != -1) this.setState({selected: 2})
    else if (path.indexOf('settings') != -1) this.setState({selected: 3})
    else if (path.indexOf('log out') != -1) this.setState({selected: 4})
  }

  state = {
    selected: 0,
  }
  
  menuData = [
    { icon: 'home', link: '/dashboard/home', label: 'Home' },
    { icon: 'date_range', link: '/dashboard/schedule', label: 'Schedule' },
    { icon: 'assignment', link: '/dashboard/khs', label: 'KHS'},
    { icon: 'settings', link: '/dashboard/settings', label: 'Settings'},
    { icon: 'exit_to_app', onClick: () => console.log('logging out'), label: 'Log Out', red: true}
  ]

  renderMenuItem() {
    let selected = this.state.selected

    return _.map(this.menuData, (data, i) => {
      let View;
      if (data.link) View = Link
      else View = props => <div {...props}>{props.children}</div>

      return <View 
        className={`${style.item} ${selected == i ? style.active : ''}`} 
        to={data.link} key={i}
        onClick={() => {
          if (data.onClick) data.onClick()
          else this.setState({selected: i})
        }}
      >
        <span className="material-icons">{data.icon}</span>
        <span className={style.label}>{data.label}</span>
      </View>
    })
  }

  render() {
    return (
      <div className={style.container}>
        {this.renderMenuItem()}
      </div>
    )
  }
}