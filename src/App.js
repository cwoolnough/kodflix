import React, { Component } from 'react';
import './App.css';
import Avengers from './Frontend/Components/Movies/Avengers.jpg';
import JurassicWorld from './Frontend/Components/Movies/JurassicWorld.jpg';
import MammaMia from './Frontend/Components/Movies/MammaMia.jpg';
import Rampage from './Frontend/Components/Movies/Rampage.jpg';
import Siberia from './Frontend/Components/Movies/Siberia.jpg';
import Sicario from './Frontend/Components/Movies/Sicario.jpg';
import Cover from './Frontend/Components/MovieCovers/MovieCovers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-row">
          <Cover src={Avengers} title="Avengers" />
          <Cover src={JurassicWorld} title="Jurassic World" />
          <Cover src={MammaMia} title="Mamma Mia" />
          <Cover src={Rampage} title="Rampage" />
          <Cover src={Sicario} title="Sicario" />
          <Cover src={Siberia} title="Siberia" />
        </div>
      </div>
    );
  }
}

export default App;
