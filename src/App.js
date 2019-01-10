import React, { Component } from 'react';
import Header from './components/Header';
import MainHome from './components/MainCreator';
import Footer from './components/Footer';
// import Home from './components/Home';
import Creator from './components/Creator';
//import 'core/_variables.scss';
import './App.scss';


class App extends Component {
  render() {
    return (
          <Creator />
    );
  }
}

export default App;