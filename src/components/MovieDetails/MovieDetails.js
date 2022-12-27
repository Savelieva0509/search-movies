import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { movieDetails } from '../../API';
import Loader from 'components/Loader/Loader';
import img from 'components/default.png';


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
  const backLink = location.state?.from ?? '/movies';

    return (
    <>
      {movie && (
        <div>
          <Link to={backLink}>Go back</Link>
          {isLoading && <Loader />}
          <img src={
            movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : img
          }
          alt={movie.original_title} />
          <h2> {movie.original_title}</h2>
          <p>User score : {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
            </ul>
            <div>
        <h2>Additional Information</h2>
        <Link to={'cast'} state={{ from: backLink }}>Cast</Link>
        <Link to={'reviews'} state={{ from: backLink }}>Reviews</Link>
      </div>
          <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
        </div>
      )}
    </>
  );
};
