import { Component } from 'react';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import Button from 'components/Button';

import '../styles/styles.css';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar />

        <Loader />
        <Button />
        {showModal && <Modal onClose={this.toggleModal}/>}
      </div>
    );
  }
}

export default App;
