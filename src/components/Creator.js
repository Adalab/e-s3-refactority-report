import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <MainCreator arraySkills={this.props.arraySkills}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;