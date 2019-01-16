import React, { Component } from 'react';
import Creator from './components/Creator';
import './App.scss';


class App extends Component {
  
  constructor (props){
    super(props);
    
    this.state = {
    arraySkills : ['html', 'css', 'javascript'],
    card: {
      name: 'Nombre Apellido',
      job: 'front-end developer',
      email: ''
    }
    }; 
    this.handleName = this.handleName.bind(this);  
    this.handleJob = this.handleJob.bind(this);
    this.handleEmail = this.handleEmail.bind(this);   


  }

handleName(e) {
  const name = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, name: name }
  });
}

handleJob(e) {
  const job = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, job: job }
  });
}

handleEmail(e) {
  const email = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, email: email }
  });
}

  render() {
    const {card, arraySkills} = this.state;

    return (
          <Creator actionName={this.handleName} actionJob={this.handleJob} card={card} arraySkills={arraySkills} actionEmail={this.handleEmail}/>
    );
  }
}

export default App;