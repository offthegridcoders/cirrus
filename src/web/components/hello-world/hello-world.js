// Dependencies
import React, { Component } from 'react'

// Component
export function HelloWorld(props) {
  return (
    <div className="hello-world">
      <h2>Hello, World</h2>
      <p>Also, {props.name}</p>
    </div>
  )
}