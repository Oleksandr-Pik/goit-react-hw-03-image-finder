import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
