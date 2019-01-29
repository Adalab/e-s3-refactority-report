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
        photo: 'https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT',
        email: '',
        phone:'',
        linkedin:'',
        github:'',
        palette: 1,
        typography: 2,
        skills: []
      },
      
      collapsable: 'main__design--container hidden',
      collapsableFill: 'main__fill--container hidden',
      collapsableShare: 'main__share--container hidden',
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
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.handleCollapsableFill = this.handleCollapsableFill.bind(this);
    this.handleCollapsableShare = this.handleCollapsableShare.bind(this);
  }


  //LocalStorage
  
  componentDidMount(){
    this.fetchNewSkills();
    const card = this.getData();

    if(card !== ''){
      this.setState({card: card});
    }
    }
  componentDidUpdate(){
    this.saveData(this.state.card)
  }
    saveData(data) {
      localStorage.setItem('savedCard', JSON.stringify(data));
    }
    getData() {
      const savedCard = localStorage.getItem('savedCard');
  
      if (savedCard !== null) {
        return JSON.parse(savedCard);
      } else {
        return '';
      }
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
    card:{...card, photo: url},
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
    card: {...card, phone: tel }
  });
}
tel
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
    card: {...card, github: git }
  });
}

fetchNewSkills(){
  fetchSkills()
  .then(data=>{
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
    skillsSelected.push(skill);
  } else if (skillsSelected.length>=3 && skillsSelected.includes(skill)) { 
    e.target.checked = false;
    skillsSelected.splice(skillsSelected.indexOf(skill), 1);
  } else if (skillsSelected.length<3 && skillsSelected.includes(skill)) {
    e.target.checked = false;
    skillsSelected.splice(skillsSelected.indexOf(skill), 1);
  } else if (skillsSelected.length>=3 && !(skillsSelected.includes(skill))) {
    e.target.checked = false;
  }
  this.setState({
    card: {...card, skills : skillsSelected}
  });
}

  handleTypo(e) {
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

handleCollapsable(){
  if (this.state.collapsable.includes('hidden')){
    this.setState({
      collapsable: 'main__design--container'
    })
  } else {
    this.setState({
      collapsable: 'main__design--container hidden'
    })
  }
}

handleCollapsableFill(){
  if (this.state.collapsableFill.includes('hidden')){
    this.setState({
      collapsableFill: 'main__fill--container'
    })
  } else {
    this.setState({
      collapsableFill: 'main__fill--container hidden'
    })
  }
}

handleCollapsableShare(){  
  if (this.state.collapsableShare.includes('hidden')){
    this.setState({
      collapsableShare: 'main__share--container'
    })
  } else {
    this.setState({
      collapsableShare: 'main__share--container hidden'
    })
  }
}



handleReset() {
  const defaultCard = {
      name: 'Nombre Apellido',
      job: 'front-end developer',
      photo: "https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT",
      email: '',
      phone:'',
      linkedin:'',
      github:'',
      palette: 1,
      typography: 2,
      skills: []
    };

    document.querySelector(".main__form").reset();

  this.setState({
    card: defaultCard,
    imageDefault: true
  });
}

  render() {
    const {card, arraySkills, imageDefault, collapsable, collapsableFill,collapsableShare} = this.state;

    return (

      <React.Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
            <Route path='/creator'
            render={props => (
            <Creator match={props.match} actionName={this.handleName} valueName={this.state.card.name} actionJob={this.handleJob} valueJob={this.state.card.job} card={card} arraySkills={arraySkills} actionEmail={this.handleEmail} actionTel={this.handleTel} actionLinkedin={this.handleLinkedin} actionGit={this.handleGit} imageDefault={imageDefault} handleUrl={this.handleUrl} actionTypo={this.handleTypo} actionColor={this.handleColor} actionFetch={this.fetchNewSkills} actionFillS={this.handleFillSkills} handleReset={this.handleReset} handleCollapsable={this.handleCollapsable} collapsable={collapsable} handleCollapsableFill={this.handleCollapsableFill} collapsableFill={collapsableFill} collapsableShare={collapsableShare} handleCollapsableShare={this.handleCollapsableShare}/>)} 
          />        
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;