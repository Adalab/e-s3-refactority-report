import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
    const {card, arraySkills, actionName, actionJob, handleUrl, imageDefault} = this.props;

        return(
            <React.Fragment>
                <Header />
                <MainCreator imageDefault={imageDefault} actionName={actionName} actionJob={actionJob} handleUrl={handleUrl} arraySkills={arraySkills} card={card}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;