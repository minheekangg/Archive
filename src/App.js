import React, { Component } from 'react';
import './App.css';

import Cloudinary from './Component/Cloudinary'

class App extends Component {
  state = {takePhoto: false}
  render() {
    return <div className="App">
      <button onClick={()=> this.setState({takePhoto: true})}> </button>
    { this.state.takePhoto ? <Cloudinary /> : <p>"just wait!"</p> }
      </div>;
  }
}

export default App;
