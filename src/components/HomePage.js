import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
//import 'core/_variables.scss';
//import './App.scss';


class HomePage extends Component {
  render() {
    return (
    <div className="page">
      <div className="page__home-container">
        <main className="page__home">
        <div className="home__main">
            <header className="page__header">
            <h1 className="hidden__element header__title"> Awesome profile-cards</h1>
            <img src='assets/images/tarjetas-molonas.svg' alt="logo" className="header__logo"/>
            </header>  
            <h2 className="main__title-2">Crea tu tarjeta de visita</h2>
            <p className="main__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <ul className="main__icons">
                <li className="icon icon__design"><span className="far fa-object-ungroup"></span><p>Diseña</p></li>
                <li className="icon icon__fill"><span className="far fa-keyboard"></span><p>Rellena</p></li>
                <li className="icon icon__share"><span className="fas fa-share-alt"></span><p>Comparte</p></li>
            </ul>
        </div>
        <Link to='/creator'><button className="button main__button" >Comenzar</button></Link>
      </main>
    </div>
        <footer className="page__footer">
        <div className="footer__container">
            <p className="footer__text">Awesome profile-cards @2018</p>
            <a href="https://adalab.es/">
                <img src="assets/images/logo-adalab-80px.png" alt="Logo Adalab" className="footer__logo"/>
            </a>
        </div>
    </footer>
    </div>
    )
  }
}

export default HomePage;
