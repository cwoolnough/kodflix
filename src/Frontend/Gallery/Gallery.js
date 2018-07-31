import React, { Component } from 'react';
import Cover from './../Cover/Cover.js';
import './../Cover/Cover.css';
import Movies from './../GalleryGet/GalleryGet';

class Gallery extends Component {
   render() {
      return (
         <div className="container-row">
            {Movies.map(movie => <Cover src={movie.src} title={movie.title} alt={movie.title} id={movie.id} key={movie.id} />
            )}  
         </div>
      );
   }
}

export default Gallery;
