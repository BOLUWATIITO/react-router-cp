import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
      trailerURL: 'https://www.youtube.com/embed/6hB3S9bIaco',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The Godfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      trailerURL: 'https://www.youtube.com/embed/sY1S34973zA',
      rating: 9.2,
    },
    {
      id: 3,
      title: 'The Godfather: Part II',
      description:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/4/47/Godfather_part_II.jpg',
      trailerURL: 'https://www.youtube.com/embed/9O1Iy9od7-A',
      rating: 9.0,
    },
  ]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/' className='navbar-brand'>
            Movie App
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/add' className='nav-link'>
                  Add Movie
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/'>
            <MovieList movies={movies} />
          </Route>
          <Route path='/add'>
            <MovieForm handleAddMovie={handleAddMovie} />
          </Route>
          <Route path='/movies/:id'>
            <MovieDetails movies={movies} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
