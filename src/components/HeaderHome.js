import React, { Component } from 'react';
import coolCard from '../images/tarjetas-molonas.svg';

class HeaderHome extends Component {
    render() {
        return (
            <header className="page__header">
                <h1 className="hidden__element header__title"> Awesome profile-cards</h1>
                <img src={coolCard} alt="logo" className="header__logo" />
            </header>
        );
    }
}

export default HeaderHome;