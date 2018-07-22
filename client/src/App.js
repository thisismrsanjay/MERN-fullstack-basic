import React, { Component } from 'react';
import './App.css';
import AppNavbar from    './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from    './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
          <AppNavbar/>
          <div className="container">
          <ItemModal/>
          <h1>Hello from the other side</h1>
          <ShoppingList/>
          </div>     
      </div>
      </Provider>
    );
  }
}

export default App;
