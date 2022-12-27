import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation()
  console.log(location.state);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link
          to={`/movies/${id}`}
          key={id}
          state={{ from: location }}
        >
          {title}
        </Link>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
