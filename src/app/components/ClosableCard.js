//MODULES
import React, { Component } from 'react'

//STYLES
import style from './css/closable-card.scss'

//COMPONENT
export default class ClosableCard extends Component {
  componentDidMount() {
    let open = this.props.open
    if (open !== undefined) this.setState({open})
  }

  state = {
    open: true,
  }

  toggleCard = () => {
    this.setState({open: !this.state.open})
  }

  renderContent() {
    if (this.state.open) return (
      <div className={style.content}>
      {this.props.children}
      </div>
    )
  }

  render() {
    let { open } = this.state

    return (
      <div>
      <div className={style.container}>
        <div className={style.header} onClick={this.toggleCard}>
          <span className={style.title}>{this.props.title}</span>
          <span className={"material-icons " + style.icon }>{
            `keyboard_arrow_${open ? 'down' : 'up'}`
          }</span>
        </div>
        {this.renderContent()}
      </div>
      </div>
    )
  }
}