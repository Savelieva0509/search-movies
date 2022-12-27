import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { movieDetails } from '../../API';
import Loader from 'components/Loader/Loader';
import img from 'components/default.png';
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
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
  }, [setError, movieId]);
  const backLink = location.state?.from ?? '/movies';

  return (
    <div className={css.movie__container}>
      {movie && (
        <div>
          <Link to={backLink} className={css.backlink}>
            &#8592; Go back
          </Link>
          {isLoading && <Loader />}
          <div className={css.inform__container}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : img
              }
              alt={movie.original_title}
            />
            <h2> {movie.original_title}</h2>
            <p>User score : {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Additional Information</h2>
            <NavLink
              to={'cast'}
              state={{ from: backLink }}
              className={({ isActive }) =>
                !isActive ? css.link : css.link__active
              }
            >
              Cast
            </NavLink>
            <NavLink
              to={'reviews'}
              state={{ from: backLink }}
              className={({ isActive }) =>
                !isActive ? css.link : css.link__active
              }
            >
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
