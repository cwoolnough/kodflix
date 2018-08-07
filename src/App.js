import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from './Frontend/Gallery/Gallery';
import Details from './Frontend/Details/Details';
import NotFound from './Frontend/NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/NotFound" component={NotFound} />
              <Route exact path="/:id" component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
