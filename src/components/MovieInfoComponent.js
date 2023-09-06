import React, { useEffect, useState } from "react";
import classes from "./MovieInfoComponent.module.css";
import axios from "axios";
import { API_KEY } from "../App";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className={classes.container}>
      {movieInfo ? <>
        <img src={movieInfo?.Poster} />
      <div className={classes.infoColumn}>
        <span className={classes.movieName}>
          {movieInfo?.Type}: {movieInfo?.Title}{" "}
        </span>
        <span className={classes.movieInfo}>
          IMDB Rating: <span>{movieInfo?.imdbRating}</span>
        </span>
        <span className={classes.movieInfo}>
          Year: <span>{movieInfo?.Year}</span>
        </span>
        <span className={classes.movieInfo}>
          Language: <span>{movieInfo?.Language}</span>
        </span>
        <span className={classes.movieInfo}>
          Rated: <span>{movieInfo?.Rated}</span>
        </span>
        <span className={classes.movieInfo}>
          Released: <span>{movieInfo?.Released}</span>
        </span>
        <span className={classes.movieInfo}>
          Runtime: <span>{movieInfo?.Runtime}</span>
        </span>
        <span className={classes.movieInfo}>
          Genre: <span>{movieInfo?.Genre}</span>
        </span>
        <span className={classes.movieInfo}>
          Director: <span>{movieInfo?.Director}</span>
        </span>
        <span className={classes.movieInfo}>
          Actors: <span>{movieInfo?.Actors}</span>
        </span>
        <span className={classes.movieInfo}>
          Plot: <span>{movieInfo?.Plot}</span>
        </span>
      </div>
      <span className={classes.close} onClick={() => props.onMovieSelect()}>
        X
      </span>
      </> : "Loading...."}
     
    </div>
  );
};

export default MovieInfoComponent;
