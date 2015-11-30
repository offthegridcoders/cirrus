/*
  Test Component
  This component will serve as a test for build system features
  and experiments in syntax.

  To enable test component, just set its prop `enabled` to `true`.
*/

// Dependencies
import React, { Component } from 'react'

// Component CSS import using es2015 syntax.
import '../test/test.css'

// Stateless component example. See
// https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d
// for more info on rationale --AB, 11/30/2015
export const Test = (props) => {
  if (props.enabled) {
    return (
      <div className="test">
        <h3>I'm a test component!</h3>
      </div>
    )
  } else {return <span />}
}
