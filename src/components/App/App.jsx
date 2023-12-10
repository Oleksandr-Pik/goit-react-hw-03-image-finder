import { Component } from 'react';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';

import '../styles/styles.css';
import Modal from 'components/Modal';
import { getImages } from 'services/getImages';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    imgPerPage: 12,
    images: null,
    // currentImage: null,
    isLoading: false,
    showModal: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page, imgPerPage } = this.state;

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoading: true });
      getImages(searchQuery, page, imgPerPage)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }

          return Promise.reject(
            new Error(`Нет результатов поиска по запросу ${searchQuery}`)
          );
        })
        .then(data => {
          this.setState({ images: data.hits, isLoading: false });
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <h1>Error всё пропало! 😢 {error.massege}</h1>}
        {images && (
          <ImageGallery 
            images={images} 
            // toggleModal={this.toggleModal} 
          />
        )}
        {isLoading && <Loader />}
        <Button />
        {this.state.showModal && <Modal 
        onClose={this.toggleModal} 
        // largeImageURL={largeImageURL} 
        // tags={tags}
        />}
        {/* {showModal && <Modal 
        onClose={this.toggleModal} 
        largeImageURL={largeImageURL} 
        tags={tags}
        />} */}
      </div>
    );
  }
}

export default App;
