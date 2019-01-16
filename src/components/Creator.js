import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
    const {card, arraySkills, actionName, actionJob, actionEmail} = this.props;

        return(
            <React.Fragment>
                <Header />
                <MainCreator actionName={actionName} actionJob={actionJob} arraySkills={arraySkills} card={card} actionEmail={actionEmail}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;