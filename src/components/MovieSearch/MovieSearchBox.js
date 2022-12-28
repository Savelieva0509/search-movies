import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../MovieSearch/MovieSearch.module.css';

function MovieSearchBox({ onSubmit, name }) {
  const [movieName, setMovieName] = useState(name);

  const handleChange = event => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      toast('Enter the name!');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <div className={css.form_container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="imgName"
          placeholder="Search images and photos"
          value={movieName}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <span>Search</span>
        </button>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default MovieSearchBox;

MovieSearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
