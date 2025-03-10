import "./App.css";
import axios from "axios";
import { useEffect, useState, CSSProperties } from "react";
import Search from "../Search/Search";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";

function App() {
  const API_BASE_URL = "https://api.themoviedb.org/3/";

  const [moviesList, setMoviesList] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmVlYmIyYjQzYjRkOWRmOTM5YTk3ZWZmYWJlZDFlMiIsIm5iZiI6MTcxMzgzNDk5MS43NjQsInN1YiI6IjY2MjcwYmVmZTU0ZDVkMDE2NWVlNDdiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6SAta4yGW7OaB7ZvufeXDGyBfeFa62S1e74gZl5Aybo`,
    },
  };

  async function fetchMovies(query = "") {
    try {
      setIsLoading(true);
      const result = await axios.get(
        query
          ? `${API_BASE_URL}search/movie?query=${query}`
          : `${API_BASE_URL}discover/movie?sort_by=popularity.desc`,
        options
      );

      console.log(result.data.results);
      setMoviesList(result.data.results);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./heroImg.png" alt="hero-title" />

          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search
          errorMessage={errorMessage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchMovies={fetchMovies}
          currentSearchTerm={currentSearchTerm}
          setCurrentSearchTerm={setCurrentSearchTerm}
        />
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <ul>
            {moviesList.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
