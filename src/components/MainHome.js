import React, { Component } from 'react';
import HeaderHome from './HeaderHome';

class MainHome extends Component {
    render() {
        return (
            <main className="page__home">
                <div className="home__main">
                    <HeaderHome />
                    <h2 className="main__title-2">Crea tu tarjeta de visita</h2>
                    <p className="main__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                    <ul className="main__icons">
                        <li className="icon icon__design"><span className="far fa-object-ungroup"></span><p>Diseña</p></li>
                        <li className="icon icon__fill"><span className="far fa-keyboard"></span><p>Rellena</p></li>
                        <li className="icon icon__share"><span className="fas fa-share-alt"></span><p>Comparte</p></li>
                    </ul>
                </div>
                <a href="cards.html"><button className="button main__button" href="">Comenzar</button></a>
            </main>
        );
    }
}

export default MainHome;