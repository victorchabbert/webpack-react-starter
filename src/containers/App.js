import React, { Component } from 'react'

import Hello from 'components/hello'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>Webpack Test App ! {this.state.counter}</h1>
        <a onClick={() => this.setState({
            counter: this.state.counter += 1
          })}>+</a>
        <Hello />
      </div>
    )
  }
}
