import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../movies-api';
import { ColorRing } from 'react-loader-spinner';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={`${movie.title} poster`}
        width={280}
      />
      <h1>{movie.title}</h1>
      {movie.tagline && (
        <p>
          <i>{`"${movie.tagline}"`}</i>
        </p>
      )}
      {movie.overview && <p>Overview: {movie.overview}</p>}
      {movie.vote_average && (
        <p>Average rating: {Math.floor(movie.vote_average)}</p>
      )}

      {movie.genres && movie.genres.length > 0 && (
        <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      )}

      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <Suspense
        fullback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
