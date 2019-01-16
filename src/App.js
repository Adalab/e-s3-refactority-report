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
      email: '',
      tel:'',
      linkedin:'',
      git:''
    }
    }; 
    this.handleName = this.handleName.bind(this);  
    this.handleJob = this.handleJob.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTel = this.handleTel.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
    this.handleGit = this.handleGit.bind(this);   

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

handleTel(e) {
  const tel = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, tel: tel }
  });
}

handleLinkedin(e) {
  const linkedin = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, linkedin: linkedin }
  });
}

handleGit(e) {
  const git = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, git: git }
  });
}

  render() {
    const {card, arraySkills} = this.state;

    return (
          <Creator actionName={this.handleName} actionJob={this.handleJob} card={card} arraySkills={arraySkills} actionEmail={this.handleEmail} actionTel={this.handleTel} actionLinkedin={this.handleLinkedin} actionGit={this.handleGit}/>
    );
  }
}

export default App;