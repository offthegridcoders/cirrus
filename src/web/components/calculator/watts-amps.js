// Dependencies
import React, { Component } from 'react'
import {isNumber, checkCalculatorError, wattsAmps} from '../../common/calculator-utils.js'

// Component
export class WattsAmpsCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watts: 'n/a',
      amps: 'n/a',
      message: 'no error',
      error: false
    }
  }

  // Handles Form Submission
  handleSubmit(event) {
    event.preventDefault() // prevent defualt form submit
    var results = wattsAmps(event.target.form[0].value, event.target.form[1].value) // returns watts & amps object
    this.setState(results) // sets state with results object
  }

  // Renders View
  render() {
    return (
      <div>
        <form onChange={this.handleSubmit.bind(this)}>
          <h1>Get Watts and Amps</h1>
          <label>ohms <input type="text" placeholder="ohms"/></label>
          <label>volts <input type="text" placeholder="volts"/></label>
        </form>
        <p>watts: {this.state.watts}</p>
        <p>amps: {this.state.amps}</p>
        <p className={this.state.error ? 'error' : 'hidden'}>Error: {this.state.message}</p>
      </div>
    )
  }
}
