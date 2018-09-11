import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

import NavbarApp from './components/NavbarApp'
import Shoppinlist from './components/ShoppingList'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavbarApp />

          <h1>Shoppin List App</h1>
          <hr />
          <Shoppinlist />

        </div>
      </Provider>
    );
  }
}

export default App;
