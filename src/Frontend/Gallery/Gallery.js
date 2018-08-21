import React, { Component } from 'react';
import Cover from './../Cover/Cover.js';
import './../Cover/Cover.css';
import Loading from '../Loading/Loading.js';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: false
        };
    }
    componentDidMount() {
        fetch('/rest/movies')
            .then(res => res.json())
            .then(movies => this.setState({ movies, loading: true}));
    }

    render() {

        if (!this.state.loading) {
            return <Loading />
        }

        return (
            <div className="container-row">
                {this.state.movies.map(movie => <Cover src={movie.src} title={movie.title} alt={movie.title} id={movie.id} key={movie.id} />)}
            </div>
        );
    }
}

export default Gallery;

