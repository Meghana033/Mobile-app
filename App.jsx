import { useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Sci-Fi",
      description: "A mind bending thriller"
    },
    {
      id: 2,
      title: "Titanic",
      year: 1997,
      rating: 7.9,
      genre: "Romance",
      description: "Classic love story"
    },
    {
      id: 3,
      title: "Avengers",
      year: 2012,
      rating: 8.0,
      genre: "Action",
      description: "Marvel superhero movie"
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      genre: "Sci-Fi",
      description: "Space exploration film"
    },
    {
      id: 5,
      title: "Frozen",
      year: 2013,
      rating: 7.5,
      genre: "Animation",
      description: "Disney animated movie"
    },
    {
      id: 6,
      title: "Joker",
      year: 2019,
      rating: 8.4,
      genre: "Drama",
      description: "Psychological drama"
    }
  ];

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const searchMatch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const genreMatch =
      genre === "All" || movie.genre === genre;

    return searchMatch && genreMatch;
  });

  return (
    <div className="app">
      <h1>Movie List Filter & Search</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Drama">Drama</option>
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="no-movies">
            No movies found
          </p>
        )}
      </div>
    </div>
  );
}

export default App;