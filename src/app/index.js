import React, { Component } from 'react'
import {routes as scenes} from '../routes'
import AppBar from '../components/app_bar'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <AppBar />
        <main id='outer-container'>
          {scenes}
        </main>
      </div>
    )
  }
}

export default App
