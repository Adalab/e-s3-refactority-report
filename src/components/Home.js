import React, { Component } from 'react';
import Header from './Header';
import MainHome from './MainHome';
import Footer from './Footer';
// import logo from '../images/';



class Home extends Component {
    render(){
        return(
            <div className="page">
                <div className="page__home-container">
                    {/* <Header /> */}
                    <MainHome />
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;