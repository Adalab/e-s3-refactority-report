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
      image: "https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT"
      }
    }; 
    this.handleName = this.handleName.bind(this);  
    this.handleJob = this.handleJob.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
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
handleUrl(url) {
  const {card} = this.state;
  this.setState({
    card:{...card, image: url}
  });
}

  render() {
    const {card, arraySkills} = this.state;

    return (
          <Creator actionName={this.handleName} actionJob={this.handleJob} handleUrl={this.handleUrl} card={card} arraySkills={arraySkills}/>
    );
  }
}

export default App;