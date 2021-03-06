import React, { Component } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import "./MovieList.css";

class MovieList extends Component {
  state = {
    movieList: [],
    term: "godfather"
  };
  apiCall(term) {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=${apikey}`)
      .then(res => {
        console.log(res.data.Search);
        this.setState({
          movieList: res.data.Search
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    console.log(this.props);
    this.apiCall(this.state.term);
  }
  componentDidUpdate() {
    //console.log(`prop=${this.props.term}, state=${this.state.term}`);
    if (this.props.term !== "" && this.state.term !== this.props.term) {
      this.setState({ term: this.props.term }, () => {
        //console.log(this.state.term);
        this.apiCall(this.state.term);
      });
    }
  }
  // submitHandler = imdbid => {
  //   console.log(imdbid);
  //   //this.setState({ selectedImdb: imdbid });
  // };
  render() {
    if (this.state.movieList) {
      var movies = this.state.movieList.map(movie => {
        return (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            onSubmitButton={this.props.onSubmitButton}
          />
        );
      });
    }
    return (
      <div className="container">
        <div className="movieList">{movies}</div>
      </div>
    );
  }
}

export default MovieList;
