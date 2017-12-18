//MODULES
import React, { Component } from 'react'

//STYLE
import style from './css/form-wrapper.scss'

//COMPONENT
export default class FormWrapper extends Component {
    render() {
        return (
            <div className={style['container']}>
                <div className={style['button']}>{this.props.button}</div>
                <div className={style['wrapper-label']}>{this.props.label}</div>
                {this.props.children}
            </div>
        )
    }
}