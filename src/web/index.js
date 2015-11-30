// Dependencies
import React from 'react'
import { render } from 'react-dom'

// Test Component for build system
import { Test } from './components/test/test.js'

// Components
import { WattsAmpsCalc } from './components/calculator/watts-amps.js'
import { VoltsAmpsCalc } from './components/calculator/volts-amps.js'
import { OhmsVoltsCalc } from './components/calculator/ohms-volts.js'
import { WattsVoltsCalc } from './components/calculator/watts-volts.js'
import { WattsOhmsCalc } from './components/calculator/watts-ohms.js'

// Component
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="calculator-component">
        <Test/>
        <WattsAmpsCalc/>
        <VoltsAmpsCalc/>
        <OhmsVoltsCalc/>
        <WattsVoltsCalc/>
        <WattsOhmsCalc/>
      </div>
    )
  }
}

// Render app into html
render(<App />, document.getElementById('app'))
