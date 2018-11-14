import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import ShowCard from './components/ShowCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/movie" component={ShowCard}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
