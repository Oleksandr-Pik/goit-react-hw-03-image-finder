import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {

  return (
    <button
      className="Button"
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </button>
  );
};

// Button.propTypes = {};

export default Button;
