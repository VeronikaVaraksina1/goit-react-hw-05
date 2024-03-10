import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import fetchData from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getData = async () => {
      try {
        const data = await fetchData(query);
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [query]);

  return (
    <>
      <SearchBar query={query} onSetQuery={setQuery} />
      <MovieList movies={movies} />
    </>
  );
}
