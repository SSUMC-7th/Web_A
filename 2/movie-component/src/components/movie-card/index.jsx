import React from "react";
import "./index.css";

export default function MovieCard({ imageUrl }) {
  return (
    <div className="MovieCardStyle">
      <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} />
    </div>
  );
}
