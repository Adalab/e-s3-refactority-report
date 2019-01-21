import React, { Component } from 'react';
import Creator from './components/Creator';
import './App.scss';
import {fetchSkills} from './services/SkillsService';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends Component {
  
  constructor (props){
    super(props);
    
    this.state = {

      arraySkills : [],
    card: {
      name: 'Nombre Apellido',
      job: 'front-end developer',
      image: "https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT",
      email: '',
      tel:'',
      linkedin:'',
      git:'',
      skills: []
    },

    imageDefault: true

    }; 


    this.handleName = this.handleName.bind(this);  
    this.handleJob = this.handleJob.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTel = this.handleTel.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
    this.handleGit = this.handleGit.bind(this);   
    this.fetchNewSkills = this.fetchNewSkills.bind(this);
    this.handleFillSkills = this.handleFillSkills.bind(this);
    this.handleTypo = this.handleTypo.bind(this);
    this.handleColor = this.handleColor.bind(this);   
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
    card:{...card, image: url},
    imageDefault: false
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

fetchNewSkills(){
  fetchSkills()
  .then(data=>{
    console.log(data);
    this.setState({
      arraySkills: data.skills})
  });
}

handleSkills(e) {
  const skill = e.currentTarget.value;
  const {card} = this.state;
  this.setState({
    card: {...card, skills: skill }
  });
}

handleFillSkills (e) {
  const skill = e.target.value;
  const {card} = this.state;

  let skillsSelected = this.state.card.skills;

  if (skillsSelected.length < 3 && e.target.checked === true) {
    skillsSelected.push(skill)
  } else { 
    skillsSelected.splice(skillsSelected.indexOf(skill), 1);
  }

  this.setState({
    card: {...card, skills : skillsSelected}
  })
=======
handleTypo(e){
  const typo = parseInt(e.currentTarget.value);
  const {card} = this.state;
  this.setState({
    card: {...card, typography: typo }
  });
}

handleColor(e){
  const palette = parseInt(e.currentTarget.value);
  const {card} = this.state;
  this.setState({
    card: {...card, palette: palette }
  });
}

  render() {
    const {card, arraySkills, imageDefault} = this.state;

    return (

      <React.Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
            <Route path='/creator'
            render={props => (
            <Creator match={props.match} actionName={this.handleName} actionJob={this.handleJob} card={card} arraySkills={arraySkills} actionEmail={this.handleEmail} actionTel={this.handleTel} actionLinkedin={this.handleLinkedin} actionGit={this.handleGit} imageDefault={imageDefault} handleUrl={this.handleUrl} actionTypo={this.handleTypo} actionFetch={this.fetchNewSkills} actionFillS={this.handleFillSkills} />)} 
          />        
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;