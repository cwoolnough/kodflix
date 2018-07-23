import React, { Component } from 'react';
import './App.css';
import Avengers from './Components/Movies/Avengers.jpg';
import JurassicWorld from './Components/Movies/JurassicWorld.jpg';
import MammaMia from './Components/Movies/MammaMia.jpg';
import Rampage from './Components/Movies/Rampage.jpg';
import Siberia from './Components/Movies/Siberia.jpg';
import Sicario from './Components/Movies/Sicario.jpg';

class App extends Component {
  render() {
    return (
      <div className="movies">
        <img src={Avengers} alt="Avengers" className="movie"/>
        <img src={JurassicWorld} alt="Jurassic World" className="movie"/>
        <img src={MammaMia} alt="Mamma Mia" className="movie"/>
        <img src={Rampage} alt="Rampage" className="movie"/>
        <img src={Siberia} alt="Siberia" className="movie"/>
        <img src={Sicario} alt="Sicario" className="movie"/>
      </div>
    );
  }
}

export default App;
