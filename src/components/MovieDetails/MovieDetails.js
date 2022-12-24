import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { movieDetails } from '../../API';
import Loader from 'components/Loader/Loader';

export const MovieDetails = () => {
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
          setMovie(response.data.results);
          console.log(response);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError, movieId ]);


const { title, poster_path, vote_average, overview, genre_ids } = movie;
    return (
        <div>
            {isLoading && <Loader />}
            <img src={poster_path} alt={title}/>
            <h2> {title}</h2>
            <p>User score : {vote_average}</p>
          <h2>Overview</h2>
            <p>{overview}</p>
            <ul>
               {genre_ids.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
            </ul>
      </div>
    )
};

