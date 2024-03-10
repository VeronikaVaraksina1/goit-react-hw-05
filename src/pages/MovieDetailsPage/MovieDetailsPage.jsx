import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieById(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [movieId]);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width="280"
      />
      <h1>DetailsPage: {movie.title}</h1>
      <p>Overview: {movie.overview}</p>
      <p>
        Genres:{' '}
        {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
      </p>
    </>
  );
}
