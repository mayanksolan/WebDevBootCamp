import React, { Component } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  state = {
    movieList: []
  };
  componentDidMount() {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?s=lord&apikey=${apikey}`)
      .then(res => {
        //console.log(res.data.Search);
        this.setState({
          movieList: res.data.Search
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const movies = this.state.movieList.map(movie => {
      return <MovieItem key={movie.imdbID} movie={movie} />;
    });
    return <div>{movies}</div>;
  }
}

export default MovieList;
