import React, { Component } from 'react';
import coolCard from '../images/tarjetas-molonas.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className="page__header--cards">
                <h1 className="header__title--cards hidden"> Awesome profile-cards</h1>
                <Link to="/">
                    <img src={coolCard} alt="logo" className="header__logo--cards" />
                </Link>
            </header>
        );
    }
}

export default Header;