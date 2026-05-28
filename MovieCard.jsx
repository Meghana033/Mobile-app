import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const {
    title,
    year,
    rating,
    genre,
    description
  } = movie;

  return (
    <article className="movie-card">
      <header>
        <h2>{title}</h2>
      </header>

      <div className="movie-info">
        <p>
          <span>Release Year:</span> {year}
        </p>

        <p>
          <span>IMDb Rating:</span> {rating}
        </p>

        <p>
          <span>Category:</span> {genre}
        </p>
      </div>

      <footer>
        <p className="description">{description}</p>
      </footer>
    </article>
  );
};

export default MovieCard;
