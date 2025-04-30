import "../css/Favorites.css";
import { useMovieContext } from "../components/context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="faroite-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorite they will appear here</p>
    </div>
  );
}

export default Favorite;
