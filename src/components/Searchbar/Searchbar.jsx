import React from 'react';
// import PropTypes from 'prop-types';
import { FcSearch } from "react-icons/fc";

const Searchbar = props => {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
        <FcSearch size="2.5em" />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// Searchbar.propTypes = {};

export default Searchbar;
