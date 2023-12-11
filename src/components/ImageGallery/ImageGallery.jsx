import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal, updateСurrentImage }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} toggleModal={toggleModal} updateСurrentImage={updateСurrentImage}/>
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
