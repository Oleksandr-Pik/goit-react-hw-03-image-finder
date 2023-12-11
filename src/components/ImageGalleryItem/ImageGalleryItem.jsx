import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {};

  handleClick = () => {
    console.log('click ');
    this.props.toggleModal();
    // this.props.currentImage =
  };

  render() {
    return (
      <>
        {this.props.images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryItem" key={id}>
            <img
              className="ImageGalleryItem-image"
              src={webformatURL}
              alt={tags}
              onClick={this.handleClick}
            />
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
