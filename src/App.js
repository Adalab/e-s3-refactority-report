import React, { Component } from 'react';
import Creator from './components/Creator';
import './App.scss';


class App extends Component {
  
  constructor (props){
    super(props);
    
    this.state = {
      
    arraySkills : ['html', 'css', 'javascript']
    };
    
  }

  render() {

    return (
          <Creator arraySkills={this.state.arraySkills}/>
    );
  }
}

export default App;