import React from "react";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const { title } = useParams();
  const movie = props.movies.find((movie) => movie.title === title);

  return (
    <div>
      <div className="details-container">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="details">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title={movie.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Link to="/">Go back to home page</Link>
    </div>
  );
}

export default Details;
