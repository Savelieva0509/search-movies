import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MovieSearchBox({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

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
    <header >
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          name="imgName"
          placeholder="Search images and photos"
          value={movieName}
          onChange={handleChange}
        />
      </form>
      <ToastContainer autoClose={3000} />
    </header>
  );
}

export default MovieSearchBox;


MovieSearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

