export default function MovieCard({
  movie: { title, poster_path, vote_average },
}) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title} poster`}
        width="280"
      />
      <p>{vote_average}</p>
    </>
  );
}
