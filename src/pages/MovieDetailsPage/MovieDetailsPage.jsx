import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  return <>{/* <Link to={`movies/${movie.id}`}>Movie details</Link> */}</>;
}
