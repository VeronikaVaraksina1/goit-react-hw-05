import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewCast } from '../../movies-api';

export default function MovieCast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getData = async () => {
      try {
        const data = await getReviewCast(movieId);
        console.log(data.results);
        setReviews(data.results);
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
      <ul>
        {reviews.map(author => (
          <li key={author.id}>
            <img
              src={
                author.author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500${author.author_details.avatar_path}`
                  : defaultImg
              }
              width={250}
              alt={`${author.author_details.username} avatar`}
            />
            <p>{author.author_details.name}</p>
            <p>
              <i>{author.author_details.username}</i>
            </p>
            <p>{author.author_details.rating}</p>
            <p>{author.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
