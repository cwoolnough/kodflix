import React, { Component } from 'react';
import Avengers from './../Movies/Avengers.jpg';
import JurassicWorld from './../Movies/JurassicWorld.jpg';
import MammaMia from './../Movies/MammaMia.jpg';
import Rampage from './../Movies/Rampage.jpg';
import Siberia from './../Movies/Siberia.jpg';
import Sicario from './../Movies/Sicario.jpg';
import Cover from './../Cover/Cover.js';
import './../Cover/Cover.css';

class Gallery extends Component {
   render() {
      return (
         <div className="container-row">
            <Cover src={Avengers} title="Avengers" />
            <Cover src={JurassicWorld} title="Jurassic World" />
            <Cover src={MammaMia} title="Mamma Mia" />
            <Cover src={Rampage} title="Rampage" />
            <Cover src={Sicario} title="Sicario" />
            <Cover src={Siberia} title="Siberia" />
         </div>
      );
   }
}

export default Gallery;
