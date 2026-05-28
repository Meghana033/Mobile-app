import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>

      <p>
        <strong>Year:</strong> {movie.year}
      </p>

      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>

      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>

      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;