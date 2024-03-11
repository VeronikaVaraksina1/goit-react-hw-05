import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import fetchData from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [params] = useSearchParams();
  const queryFilter = params.get('query') ?? '';

  useEffect(() => {
    if (!queryFilter) return;

    const getData = async () => {
      try {
        const data = await fetchData(queryFilter);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [queryFilter]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(queryFilter.toLowerCase())
  );

  return (
    <>
      <SearchBar />
      <MovieList movies={filteredMovies} />
    </>
  );
}
