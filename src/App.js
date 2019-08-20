import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janator'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspiring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]

    return (
      <div className="App">
        <Table characterData={ characters }/>
      </div>
    )
  }
}

export default App