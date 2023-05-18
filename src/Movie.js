import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
