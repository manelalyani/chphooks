import React, { useState } from "react";

import MovieList from "MovieList";
import Filter from "./components/Filter ( title, rate)";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Final Fantasy XV",
      description:
        "Final Fantasy XV, annoncé originellement sous le titre Final Fantasy Versus XIII, est un jeu vidéo de la célèbre série Final Fantasy, développé et édité par Square Enix, sorti le 29 novembre 2016",
      posterURL: "https://static.wikia.nocookie.net/listofdeaths/images/b/b5/A_New_Hope_poster.jpg/revision/latest/scale-to-width-down/300?cb=20211105092556",
      rating: 10,
    },
    {
      title: "Final Fantasy Spirits Within",
      description:
        "C'est un film américano-japonais de Hironobu Sakaguchi (créateur de la série de jeux vidéo Final Fantasy) et Motonori Sakakibara, sorti le 15 août 2001. ",
      posterURL: "https://www.gamecash.be/thumbnail-600/dvd-star-wars-4-e12767.jpg",
      rating: 7.8,
    },
    {
      title: "Final Fantasy Spirits Within",
      description:
        "C'est un film américano-japonais de Hironobu Sakaguchi (créateur de la série de jeux vidéo Final Fantasy) et Motonori Sakakibara, sorti le 15 août 2001. ",
      posterURL: "https://www.gamecash.be/thumbnail-600/dvd-star-wars-4-e12767.jpg",
      rating: 7.8,
    },
    {
      title: "Final Fantasy Spirits Within",
      description:
        "C'est un film américano-japonais de Hironobu Sakaguchi (créateur de la série de jeux vidéo Final Fantasy) et Motonori Sakakibara, sorti le 15 août 2001. ",
      posterURL: "https://www.gamecash.be/thumbnail-600/dvd-star-wars-4-e12767.jpg",
      rating: 7.8,
    },
  ]);

  const [handleTitleChange, sethandleTitleChange] = useState("");
  const [handleRatingChange, sethandleRatingChange] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });
  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;