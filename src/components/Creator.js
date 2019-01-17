import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
    const {card, arraySkills, actionName, actionJob, actionEmail, actionTel, actionLinkedin, actionGit, actionTypo} = this.props;

        return(
            <React.Fragment>
                <Header />
                <MainCreator actionName={actionName} actionJob={actionJob} arraySkills={arraySkills} card={card} actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} actionTypo={actionTypo}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;