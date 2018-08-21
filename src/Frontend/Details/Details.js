import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './Details.css';

class Details extends Component {
      constructor(props) {
            super(props);

            this.state = { 
                  movie: {},
                  loading: false
            };
      }

      componentDidMount() {
            fetch('/rest/movies')
                  .then(res => res.json())
                  .then(movies => {
                        let id = (this.props.match.params.id);
                        let movie = movies.find(movie => movie.id === id);
                        this.setState({ movie, loading: true });
                  });
      }


      render() {

            if(!this.state.loading){
                  return <div>Loading...</div>
            }

            return (

                  this.state.movie === undefined
                        ? <Redirect to="/NotFound" />
                        : (
                              <div>
                                    <div className="details">
                                          <div className="details-title">
                                                <h1>{this.state.movie.title}</h1>
                                          </div>
                                          <div className="details-synopsis">
                                                <p>{this.state.movie.synopsis}</p>
                                                <div><img src={require(`../Movies/${this.state.movie.id}.jpg`)} alt={this.state.movie.alt} /></div>
                                          </div>
                                          <div className="details-home">
                                                <Link to="/">Home</Link>
                                          </div>
                                    </div>
                              </div>
                        )
            )
      };
}

export default Details;

