import MovieCard from "./MovieCard";
import React from 'react'

function MovieList({Movies}) {
  return (
    <div>
      {Movies.map((movie)=>(
        <MovieCard key={movie.title} {...movie} />

      ))}
    </div>
  );
}

export default MovieList;
