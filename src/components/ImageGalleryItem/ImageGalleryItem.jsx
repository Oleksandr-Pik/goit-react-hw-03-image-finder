import React, { Component } from 'react';

const ImageGalleryItem = ({images, toggleModal, updateСurrentImage}) => {
  
    return (
      <>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryItem" key={id}>
            <img
              className="ImageGalleryItem-image"
              src={webformatURL}
              alt={tags}
              onClick={ () => {toggleModal(); updateСurrentImage(largeImageURL)}}
            />
          </li>
        ))}
      </>
    );
  }

export default ImageGalleryItem;
// this.handleClick,