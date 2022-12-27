import { useEffect, useState } from 'react';
import MovieList from 'components/MovielList/MovieList';
import { getTrending } from '../../API';
import Loader from 'components/Loader/Loader';
import css from '../Home/Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      getTrending()
        .finally(() => setIsLoading(false))
        .then(response => {
          setMovies(response.data.results);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError]);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
