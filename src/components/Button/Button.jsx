import React from 'react';
import { getImages } from 'services/getImages';
// import PropTypes from 'prop-types';

const Button = ({ searchQuery, currentPage, imgPerPage }) => {
  const handleLoadMore = () => {
   
    console.log('Вы нажали кнопку Load more... ');
    currentPage++;
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
        console.log('data.hits :>> ', data.hits);
        // this.setState({ images: [...images, data.hits], isLoading: false });

        // currentPage === Math.ceil(data.totalHits / imgPerPage)
        //   ? this.setState({ isLoadMoreHidden: true })
        //   : this.setState({ isLoadMoreHidden: false });

        if (data.hits.length === 0) {
          // this.setState({ isLoadMoreHidden: true });
        }
      })
      .catch(error => {
        // this.setState({ error });
      })
      // .finally(() => this.setState({ isLoading: false }));
  };

  return (
    <button className="Button" type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

// Button.propTypes = {};

export default Button;
