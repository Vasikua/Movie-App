import React from "react";
import "./MovieCard.css";
const MovieCard = ({
  data: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "./No-Poster-min.png"
        }
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
