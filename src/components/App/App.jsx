import { Component } from 'react';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';
import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';
import { getImages } from 'services/getImages';

import '../styles/styles.css';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    imgPerPage: 12,
    images: '',
    currentImage: null,
    showModal: false,
    error: '',
    isLoading: false,
    isLoadMoreHidden: true,
  };

  componentDidMount = () => {};

  componentDidUpdate(_, prevState) {
    const { images, searchQuery, currentPage, imgPerPage } = this.state;

    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ isLoading: true });

      getImages(searchQuery, currentPage, imgPerPage)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(
            new Error(`Нет результатов поиска по запросу ${searchQuery}`)
          );
        })
        .then(data => {
          this.setState({ images: [...images, ...data.hits], isLoading: false });

          currentPage === Math.ceil(data.totalHits / imgPerPage)
            ? this.setState({ isLoadMoreHidden: true })
            : this.setState({ isLoadMoreHidden: false });

          if (data.hits.length === 0) {
            this.setState({ isLoadMoreHidden: true });
          }
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
    console.log('handleSearch method');
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  updateСurrentImage = value => {
    this.setState({ currentImage: value });
  };

  handleLoadMore = () => {
    console.log('Вы нажали кнопку Load more... в App ');
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const {
      images,
      currentImage,
      showModal,
      isLoading,
      error,
      isLoadMoreHidden,
    } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <h1>Error Упс, что-то пошло не так! 😢 {error.massege}</h1>}
        {images && (
          <ImageGallery
            images={images}
            toggleModal={this.toggleModal}
            updateСurrentImage={this.updateСurrentImage}
          />
        )}
        {isLoading && <Loader />}

        {!isLoadMoreHidden && <Button handleLoadMore={this.handleLoadMore} />}

        {showModal && (
          <Modal onClose={this.toggleModal} currentImage={currentImage} />
        )}
      </div>
    );
  }
}

export default App;
