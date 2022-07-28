import React, { Component } from 'react';
import Pokegame from './Pokegame';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <button onClick={() => window.location.reload()}>New Decks</button>

        <Pokegame />
      </div>
    );
  }
}

export default App;
