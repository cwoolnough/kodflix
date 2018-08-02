import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Movies from '../GalleryGet/GalleryGet';

class Details extends Component {
   constructor(props) {
      super(props);

      this.state = {movie: {}};
   }

   componentDidMount(){
      let id = (this.props.match.params.id);
      let movie = Movies.find(movie=> movie.id === id);
      this.setState({movie})
   };


   render() {
      return (
         <div>
            <p>{this.state.movie.title}</p>
            <Link to="/">Home</Link>
         </div>
      )
   };
}

export default Details;


