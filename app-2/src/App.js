import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ['salad', 'beets', 'chicken', 'pasta']
    };
  }

  render() {
    let foodShown = this.state.food.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
  
  return <div className="App">{foodShown}</div>

  };
}

export default App;
