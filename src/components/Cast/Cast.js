import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from '../../API';
import img from 'components/default.png';

export const Cast = () => {
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const [setError] = useState(null);

   useEffect(() => {
    try {
      setIsLoading(true);
      movieCast(movieId)
        .finally(() => setIsLoading(false))
        .then(response => {
          setCast(response.data.cast);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
   }, [setError, movieId]);
    
     if (!cast) {
    return;
  }
  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, original_name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  width={200}
                  height={300}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : img
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any information about cast</p>
      )}
    </>
  );
}