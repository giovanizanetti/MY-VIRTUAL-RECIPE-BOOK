import React, { Component } from 'react'
import './App.css'
import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        My Virtual Recipe Book
      </div>
    )
  }
}

export default App
