//MODULES
import React, { Component } from 'react'
import axios from 'axios'

//STYLES
import style from './css/selectable-card.scss'

//COMPONENT
export default class SelectableCard extends Component {
  componentDidMount() {
    axios.get('/json/semester.json').then(res => {
      this.setState({semester: res.data.semester})
    })
  }

  state = {
    semester: 0,
    selected: 1,
  }

  renderTabs() {
    let { semester, selected } = this.state
    let arr = []

    for (let i = 1; i <= semester; i++) 
      arr.push(<div 
        key={i} 
        className={`${style.tab} ${i == selected ? style['tab-active'] : ''}`} 
        onClick={() => {
          this.setState({selected: i})
          if (this.props.onClick) this.props.onClick()
        }
      }>
        <span>{`${i == selected ? 'Semester ' : ''}${i}`}</span>
      </div>)

    return arr
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style['tab-wrapper']}>
          {this.renderTabs()}
        </div>
        <div className={style.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
