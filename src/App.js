import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

import './styles/common.css';

import Homepage from './views/Homepage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Homepage/>
        </Container>
      </div>
    )
  }
}

export default App
