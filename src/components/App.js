import React, { Component } from 'react';
import GameData from './GameData/GameData';
// import GameListing from './GameData/GameListing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-flex">
        <div className="navbar-static">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="" className="brand cennter">Game List</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col 8">
            <GameData />
          </div>
        </div>
        <div className="col s4">
          
        </div>    
      </div>
    );
  }
}

export default App;
