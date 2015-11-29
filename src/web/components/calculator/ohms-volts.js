// Dependencies
import React, { Component } from 'react'
import {isNumber, checkCalculatorError, ohmsVolts} from '../../common/calculator-utils.js'

// Component
export class OhmsVoltsCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volts: 'n/a',
      ohms: 'n/a',
      message: 'no error',
      error: false
    }
  }

  // Handles Form Submission
  handleSubmit(event) {
    event.preventDefault() // prevent defualt form submit
    var results = ohmsVolts(event.target.form[0].value, event.target.form[1].value) // returns watts & amps object
    this.setState(results) // sets state with results object
  }

  // Renders View
  render() {
    return (
      <div>
        <form onChange={this.handleSubmit.bind(this)}>
          <h1>Get Ohms and Volts</h1>
          <label>watts <input type="text" placeholder="watts"/></label>
          <label>amps <input type="text" placeholder="amps"/></label>
        </form>
        <p>Ohms: {this.state.ohms}</p>
        <p>volts: {this.state.volts}</p>
        <p className={this.state.error ? 'error' : 'hidden'}>Error: {this.state.message}</p>
      </div>
    )
  }
}
