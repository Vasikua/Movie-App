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
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="comntent flex flex-row gap-1.0">
          <div className="rating ">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span className="text-black">○</span>
          <p className="lanng text-amber-50">
            {original_language ? original_language : null}
          </p>
          <span className="text-black">○</span>
          <p className="year text-amber-40">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
