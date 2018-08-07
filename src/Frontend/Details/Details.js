import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Movies from '../GalleryGet/GalleryGet';
import './Details.css';

class Details extends Component {
      constructor(props) {
            super(props);

            this.state = { movie: {} };
      }

      componentDidMount() {
            let id = (this.props.match.params.id);
            let movie = Movies.find(movie => movie.id === id);
            this.setState({ movie })
      };


      render() {
            return this.state.movie === undefined
                  ? <Redirect to="/NotFound" />
                  : (
                        <div>
                              <div className="details">
                                    <div className="details-title">
                                          <h1>{this.state.movie.title}</h1>
                                    </div>
                                    <div className="details-synopsis">
                                          <p>{this.state.movie.synopsis}</p>
                                          <div><img src={this.state.movie.src}
                                                alt={this.state.movie.alt} /></div>
                                    </div>
                                    <div className="details-home">
                                          <Link to="/">Home</Link>
                                    </div>

                              </div>

                        </div>



                  )
      };
}

export default Details;


