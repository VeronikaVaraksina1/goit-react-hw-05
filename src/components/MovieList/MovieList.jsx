import MovieCard from '../MovieCard/MovieCard';

import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
