import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {}

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if(e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {
    const {onClose, currentImage, } = this.props
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={currentImage} alt='lage-image'  />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
