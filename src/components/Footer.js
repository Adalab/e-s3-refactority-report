import React, { Component } from 'react';
import logo from '../images/logo-adalab-80px.png';


class Footer extends Component {
    render() {
        return (

            <footer className="page__footer">
                <div className="footer__container">
                    <p className="footer__text">Awesome profile-cards @2018</p> <a href="https://adalab.es/">
                        <img src={logo} alt="Logo Adalab" className="footer__logo" />
                    </a>

                </div>
            </footer>
        )
    }
}
export default Footer;