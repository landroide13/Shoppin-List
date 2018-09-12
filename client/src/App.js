import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'reactstrap';
import NavbarApp from './components/NavbarApp'
import Shoppinlist from './components/ShoppingList'
import ItemModal from './components/ItemModal';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavbarApp />
          
          <Container>
            <h1>Shopping List App</h1>
            <hr />
            <ItemModal />
            <hr />
            <Shoppinlist />
          </Container>

        </div>
      </Provider>
    );
  }
}

export default App;
