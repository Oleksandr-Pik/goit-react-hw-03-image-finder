import React, { Component } from 'react';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClick = () => {
    console.log('click ');
    this.state.toggleModal();
  };

  render() {
    return (
      <>
        {this.props.images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryItem" key={id}>
            {/* <a className='' href={largeImageURL} onClick={this.toggleModal}> */}
            <img
              className="ImageGalleryItem-image"
              src={webformatURL}
              alt={tags}
              onClick={this.toggleModal}
            />
            {/* </a> */}
        {this.state.showModal && <Modal 
        onClose={this.toggleModal} 
        largeImageURL={largeImageURL} 
        tags={tags}
        />}
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
