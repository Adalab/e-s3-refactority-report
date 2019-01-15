import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
    const {card, arraySkills, actionName} = this.props;

        return(
            <React.Fragment>
                <Header />
                <MainCreator actionName={actionName} arraySkills={arraySkills} card={card}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;