import React from "react";
import classes from "./MovieContainer.module.css";
const MovieComponent = (props) => {
  const {Title,Year, imdbID, Type, Poster}=props.movie;
  return (
    <div className={classes.movieContainer} onClick={()=>props.onMovieSelect(imdbID)}>
      <img
        className={classes.coverImg}
      src={Poster}
      />
      <span className={classes.movieName}>
       {Title}
      </span>
      <div className={classes.movieInfo}>
        <span className={classes.movieInfoCont}>Year: {Year}</span> 
        <span className={classes.movieInfoCont}>Type: {Type}</span>
      </div>
    </div>
  );
};

export default MovieComponent;
