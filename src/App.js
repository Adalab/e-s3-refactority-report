import React, { Component } from 'react';
import Header from './components/Header';
import MainHome from './components/MainCreator';
import Footer from './components/Footer';
// import Home from './components/Home';
import Creator from './components/Creator';
//import 'core/_variables.scss';
import './App.scss';

const arraySkills = ['html', 'css', 'javascript'];

class App extends Component {

  constructor (props){
    super(props);
    this.props = {arraySkills};
  }


  render() {
    return (
          <Creator arraySkills={arraySkills}/>
    );
  }
}

export default App;