import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../API';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      movieReviews(movieId)
        .finally(() => setIsLoading(false))
        .then(response => {
          setReviews(response.data.results);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError, movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author:{author}</p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
