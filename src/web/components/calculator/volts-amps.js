// Dependencies
import React, { Component } from 'react'
import {isNumber, checkCalculatorError, voltsAmps} from '../../common/calculator-utils.js'

// Component
export class VoltsAmpsCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volts: 'n/a',
      amps: 'n/a',
      message: 'no error',
      error: false
    }
  }

  // Handles Form Submission
  handleSubmit(event) {
    event.preventDefault() // prevent defualt form submit
    var results = voltsAmps(event.target.form[0].value, event.target.form[1].value) // returns watts & amps object
    this.setState(results) // sets state with results object
  }

  // Renders View
  render() {
    return (
      <div>
        <form onChange={this.handleSubmit.bind(this)}>
          <h1>Get Volts and Amps</h1>
          <label>ohms <input type="text" placeholder="ohms"/></label>
          <label>watts <input type="text" placeholder="watts"/></label>
        </form>
        <p>volts: {this.state.volts}</p>
        <p>amps: {this.state.amps}</p>
        <p className={this.state.error ? 'error' : 'hidden'}>Error: {this.state.message}</p>
      </div>
    )
  }
}
