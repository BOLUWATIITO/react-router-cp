import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { title, description, posterURL, rating, trailer } = props.movie;

  return (
    <div className="card">
      <Link to={`/details/${title}`}>
        <img src={posterURL} alt={title} />
      </Link>
      <div className="details">
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
