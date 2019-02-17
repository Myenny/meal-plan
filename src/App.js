import React, { Component } from 'react'
import blueberry from './assets/blueberry.jpg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeName: 'wiener wiener Chicken Dinner',
      recipeTime: '25 hours',
      recipeIngredients: 'inged'
    }
  }
  render() {
    return (
      <div>
        <h1>Meal Plan</h1>

        <div>
          <img src={blueberry} />
        </div>
        <div>
          <h2>{this.state.recipeName}</h2>
          <h2>{this.state.recipeTime}</h2>
          <h3>{this.state.recipeIngredients}</h3>
        </div>
      </div>
    )
  }
}

export default App
