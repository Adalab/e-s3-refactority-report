import React, { Component } from 'react';
import coolCard from '../images/tarjetas-molonas.svg';


class Header extends Component {
    render() {
        return (
            <header className="page__header--cards">
                <h1 className="header__title--cards hidden"> Awesome profile-cards</h1>
                <a href="index.html">
                    <img src={coolCard} alt="logo" className="header__logo--cards" />
                </a>
            </header>
        );
    }
}

export default Header;