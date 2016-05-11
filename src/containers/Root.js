import React, { Component } from 'react'

import Hello from 'components/hello'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter += 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Webpack Test App!</h1>
        <a
          onClick={() => this.increment()}
          style={{
            padding: '5px',
            background: '#ff8a00',
            cursor: 'pointer',
            color: 'white',
          }}
        >+</a> {this.state.counter}
        <Hello />
      </div>
    )
  }
}

export default Root
