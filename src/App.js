import React, { Component } from 'react';
import Header from './components/Header';
import MainHome from './components/MainCreator';
import Footer from './components/Footer';
// import Home from './components/Home';
import MainCreator from './components/MainCreator';
//import 'core/_variables.scss';
import './App.scss';


class App extends Component {
  render() {
    return (
      <body>
          {/* <Home /> */}
          <MainCreator />
        
    </body>
    )
  }
}

export default App;