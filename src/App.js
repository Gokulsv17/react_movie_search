import { useState } from "react";
import classes from "./App.module.css";
import movieLogo from "./assets/icons/movie-icon.svg";
import searchIcon from "./assets/icons/search-icon.svg";
import MovieComponent from "./components/MovieComponent";
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";
export const API_KEY = "7a2b130a";

function App() {
  const [search, setSearch] = useState();
  const [timeOutId, setTimeoutId] = useState();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(response);
    setMovieList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    setSearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setTimeoutId(timeout);
  };
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.titleCard}>
          <img className={classes.logo} src={movieLogo} />
          React Movie App
        </div>
        <div className={classes.search}>
          <img className={classes.searchIcon} src={searchIcon} />
          <input
            placeholder="Search Movies"
            onChange={onTextChange}
            value={search}
          />
        </div>
      </header>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={setSelectedMovie}
        />
      )}
      <div className={classes.movieListContainer}>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={setSelectedMovie}
            />
          ))
        ) : (<img className={classes.placeHolder} src={movieLogo} />
        )}
      </div>
    </div>
  );
}

export default App;
