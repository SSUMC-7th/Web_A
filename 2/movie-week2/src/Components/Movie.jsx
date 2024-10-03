import React from "react";

export default function Movie({ poster_path }) {
  return (
    <div className="movie-container">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
    </div>
  );
}
