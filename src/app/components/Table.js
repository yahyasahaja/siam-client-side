//MODULES
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Checkbox from 'react-toolbox/lib/checkbox'
import { Button } from 'react-toolbox/lib/button'

//STYLES
import style from './css/table.scss'
import theme1 from '../css/theme-button-blue.scss'
import theme2 from '../css/theme-button-red.scss'

//COMPONENTS
import FormWrapper from './FormWrapper'

//COMPONENT
export default class Table extends Component {
  componentWillMount() {
    if (this.props.data) this.setState({ data: this.props.data })
  }

  componentWillReceiveProps(next) {
    if (next.data)
      this.setState({ data: next.data })
  }

  state = {
    data: {
      header: ["a", "b"],
      content: [
        {
          link: "./",
          style: {},
          data: [

          ]
        }
      ],
    },
    checked: {
      all: false,
    }
  }

  renderHeader = () => {
    if (!this.state.data) return
    var header = this.state.data.header

    var loc1 = _.map(header, (data, i) => {
      return <th key={i + 1}>{data}</th>
    })
    var loc2 = []

    if (this.state.data.selectable) loc2[0] = <th key={0}>
      <div className={style.tableData}>
        <Checkbox
          checked={this.state.checked['all']}
          onChange={this.handleHeaderChange.bind(this)}
        />
      </div>
    </th>

    return [loc2, ...loc1]
  }

  handleHeaderChange() {
    this.toggleAllChecked()
  }

  toggleAllChecked() {
    var { data: { content: rows }, checked } = this.state
    var tobeUpdated = { all: this.state.checked.all = !this.state.checked.all }

    if (this.state.checked.all) for (let i in rows) tobeUpdated[rows[i].index] = rows[i]
    else for (let i in rows) tobeUpdated[rows[i].index] = null

    this.setState({ checked: tobeUpdated })
  }

  renderRow = () => {
    if (!this.state.data) return
    var { data: { content: rows, selectable }, checked } = this.state

    return _.map(rows, (row, i) => {
      return <tr key={i}
      >{this.renderSelection(row)}{this.renderData(row,
        e => {
          if (!row.link) return

          if (this.props.history) {
            return this.props.history.push(row.link)
          }

          window.location = row.link
        })}</tr>
    })
  }

  handleChange(row, e) {
    var { checked } = this.state
    if (!checked[row.index]) checked[row.index] = row
    else checked[row.index] = null

    this.setState({ checked })
  }

  renderSelection = (row) => {
    if (!this.state.data.selectable) return
    return (
      <td><div className={style.tableData}><Checkbox
        checked={this.state.checked[row.index] ? true : false}
        onChange={this.handleChange.bind(this, row)}
      /></div></td>
    )
  }

  renderData = (row, onClick) => {
    return _.map(row.data, (data, i) => {
      return <td className={row.link ? 'link-mode' : ''} key={i} onClick={onClick}>{data}</td>
    })
  }

  renderSelectionOptionText = () => {
    var { checked } = this.state
    var loc1 = 0, loc2 = 0

    for (let i in checked) if (i !== 'all') if (checked[i]) loc1++

    return (
      <div className={style['text-container']}>
        <span>{loc1} Item{loc1 > 1 ? 's' : ''} selected</span>
      </div>
    )
  }

  renderSelectableOption() {
    if (!this.state.data.selectable) return ''

    return (
      <FormWrapper label="Selected Options">
        <div className={style['option-container']}>
          <div className={style.left}>
            {this.renderSelectionOptionText()}
          </div>

          <div className={style.right}>
            {this.renderButtons()}
          </div>
        </div>
      </FormWrapper>
    )
  }

  renderButtons = () => {
    var { data, checked } = this.state
    var { buttons } = this.props
    //if (!buttons) return
    var checkedData = []

    for (let i in checked) if (checked[i] && i !== 'all') checkedData.push(checked[i])

    return (
      <div className={style['button-container']}>
        <Button
          theme={theme2}
          onClick={this.onDelete.bind(this, checkedData)}
          icon="delete" label="Delete" raised primary
        />
      </div>
    )
  }

  onDelete(data) {
    console.log(data)
  }

  render() {
    return (
      <div className={style['container']}>
        {this.renderSelectableOption()}
        <table>
          <tbody>
            <tr>{this.renderHeader()}</tr>
            {this.renderRow()}
          </tbody>
        </table>
      </div>
    )
  }
}