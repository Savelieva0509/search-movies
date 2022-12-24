import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link
          to={`${id}`}
          key={id}
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
