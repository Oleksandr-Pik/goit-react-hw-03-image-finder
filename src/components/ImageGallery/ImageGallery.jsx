import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal, currentImage }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} toggleModal={toggleModal}/>
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
