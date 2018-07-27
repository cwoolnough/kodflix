import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Frontend/Gallery/Gallery';
import Details from './Frontend/Details/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/Details" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
