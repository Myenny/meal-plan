import React, { Component } from 'react'
import blueberry from './assets/blueberry.jpg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <ul>Meal Plan</ul>

        <div>
          <img src={blueberry} />
        </div>
      </div>
    )
  }
}

export default App
