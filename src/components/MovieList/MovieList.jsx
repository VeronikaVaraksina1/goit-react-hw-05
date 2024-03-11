import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
