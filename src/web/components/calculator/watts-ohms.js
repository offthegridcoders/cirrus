// Dependencies
import React, { Component } from 'react'
import {isNumber, checkCalculatorError, wattsOhms} from '../../common/calculator-utils.js'

// Component
export class WattsOhmsCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ohms: 'n/a',
      watts: 'n/a',
      message: 'no error',
      error: false
    }
  }

  // Handles Form Submission
  handleSubmit(event) {
    event.preventDefault() // prevent defualt form submit
    var results = wattsOhms(event.target.form[0].value, event.target.form[1].value) // returns watts & amps object
    this.setState(results) // sets state with results object
  }
  
  // Renders View
  render() {
    return (
      <div>
        <form onChange={this.handleSubmit.bind(this)}>
          <h1>Get Watts and Ohms</h1>
          <label>volts <input type="text" placeholder="volts"/></label>
          <label>amps <input type="text" placeholder="amps"/></label>
        </form>
        <p>watts: {this.state.watts}</p>
        <p>ohms: {this.state.ohms}</p>
        <p className={this.state.error ? 'error' : 'hidden'}>Error: {this.state.message}</p>
      </div>
    )
  }
}
