// Dependencies
import React from 'react'
import { render } from 'react-dom'

// Components
//import { HelloWorld } from './components/hello-world'

// Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <HelloWorld name="Steve" />
      </div>
    )
  }
}

// Render app into html
render(<App />, document.getElementById('app'))
