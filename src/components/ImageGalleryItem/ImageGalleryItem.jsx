import React from 'react';

const ImageGalleryItem = ({tags, webformatURL, largeImageURL, toggleModal, updateСurrentImage }) => {
  return (
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={() => {
              toggleModal();
              updateСurrentImage(largeImageURL);
            }}
          />
  );
};

export default ImageGalleryItem;
