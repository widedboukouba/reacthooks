import React from 'react';
import MovieCard from './MovieCard';
import MovieAdd from './MovieAdd';
const MovieList = ({ movies, setmovies, text, rate }) => {
  return (
   <div>
    <div className='box'>
        {movies
        .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && 
        el.rating >= rate
        ) 
        .map((el) => <MovieCard movie={el} />)
        .reverse()}
    <MovieAdd movies={movies} setmovies={setmovies} />
   </div>
   </div>
  
  );
}

export default MovieList