import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { movieDetails } from '../../API';
import Loader from 'components/Loader/Loader';


export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

   useEffect(() => {
    try {
      setIsLoading(true);
      movieDetails(movieId)
        .finally(() => setIsLoading(false))
        .then(response => {
          setMovie(response.data);
          console.log(response);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError, movieId ]);
  const backLink = location.state?.from ?? '/home';

  const { original_title, poster_path, vote_average, overview, genres } = movie;
  return (
    <div>
      <Link to={backLink}>
        Go back
      </Link>
      {isLoading && <Loader />}
      <img src={poster_path} alt={original_title} />
      <h2> {original_title}</h2>
      <p>User score : {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
