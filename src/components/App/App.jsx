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
    images: [],
    imgPerPage: 12,
    currentImage: null,
    showModal: false,
    error: '',
    isLoading: false,
    isLoadMoreHidden: true,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, images, currentPage, imgPerPage } = this.state;

    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.currentPage !== prevState.currentPage
    ) {
      this.setState({ isLoading: true, isLoadMoreHidden: true });

      await getImages(searchQuery, currentPage, imgPerPage)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(
            new Error(`Error! Нет результатов поиска по запросу ${searchQuery}`)
          );
        })
        .then(data => {
          this.setState({
            images: [...images, ...data.hits],
            isLoading: false,
          });

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
    if ( searchQuery !==  this.state.searchQuery) {
      this.setState({
        currentPage: 1,
        images: [],
        currentImage: null,
        error: '',
      });
      this.setState(this.state.images.length = 0)
    }
    
    this.setState({ searchQuery });

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
        {error && <h1>Упс, что-то пошло не так! 😢 {error.massege}</h1>}

        {images.length > 0 && (
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
