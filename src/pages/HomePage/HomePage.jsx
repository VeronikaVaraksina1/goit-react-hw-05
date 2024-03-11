import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getPopularMovies } from '../../movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
