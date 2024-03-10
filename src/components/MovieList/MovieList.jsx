import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
