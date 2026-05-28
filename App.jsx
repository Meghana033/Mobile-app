import React, { useMemo, useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const movieData = [
  {
    id: 101,
    name: "Inception",
    releaseYear: 2010,
    score: 8.8,
    category: "Sci-Fi",
    info: "A mind bending thriller"
  },
  {
    id: 102,
    name: "Titanic",
    releaseYear: 1997,
    score: 7.9,
    category: "Romance",
    info: "Classic love story"
  },
  {
    id: 103,
    name: "Avengers",
    releaseYear: 2012,
    score: 8.0,
    category: "Action",
    info: "Marvel superhero movie"
  },
  {
    id: 104,
    name: "Interstellar",
    releaseYear: 2014,
    score: 8.7,
    category: "Sci-Fi",
    info: "Space exploration film"
  },
  {
    id: 105,
    name: "Frozen",
    releaseYear: 2013,
    score: 7.5,
    category: "Animation",
    info: "Disney animated movie"
  },
  {
    id: 106,
    name: "Joker",
    releaseYear: 2019,
    score: 8.4,
    category: "Drama",
    info: "Psychological drama"
  }
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const movieResults = useMemo(() => {
    return movieData.filter((item) => {
      const titleCheck = item.name
        .toLowerCase()
        .startsWith(searchText.toLowerCase());

      const categoryCheck =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return titleCheck && categoryCheck;
    });
  }, [searchText, selectedCategory]);

  return (
    <main className="app">
      <h1 className="app-title">Movie Explorer</h1>

      <section className="controls">
        <input
          type="search"
          placeholder="Type movie name..."
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          {[
            "All",
            "Sci-Fi",
            "Romance",
            "Action",
            "Animation",
            "Drama"
          ].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </section>

      <section className="movie-grid">
        {movieResults.length ? (
          movieResults.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                title: movie.name,
                year: movie.releaseYear,
                rating: movie.score,
                genre: movie.category,
                description: movie.info
              }}
            />
          ))
        ) : (
          <h2 className="no-movies">
            Sorry, no matching movies found
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;
