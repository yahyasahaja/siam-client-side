//MODULES
import React, { Component } from 'react'

//STYLES
import style from './css/card.scss'

//COMPONENT
export default props => {
  return (
    <div {...props} className={style.container} >
      {props.children}
    </div>
  )
}