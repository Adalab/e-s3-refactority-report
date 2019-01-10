import React, { Component } from 'react';
import Design from './Design';
import Preview from './Preview';


class MainCreator extends Component {
    render() {
        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview />
                    <form className="main__form">
                        <Design />
                        <div className="border-section border-section-nomargin"></div>
                        <fieldset className="main__collapsable main__fill">
                            <div className="dropdown dropdown__fill">
                                <div className="dropdown-icon"> <span className="dropdown-icon icon far fa-keyboard"></span>

                                    <h2 className="form__title main__fill--title">rellena</h2>

                                </div>
                                <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>

                                </div>
                            </div>
                            <div className="main__fill--container hidden">
                                <label for="full-name">Nombre completo</label>
                                <input id="full-name" type="text" name="full-name"
                                    className="input-container" placeholder="Ej: Paca Ramirez" />
                                <label for="occupation">Puesto</label>
                                <input id="occupation" type="text" name="occupation" className="input-container"
                                    placeholder="Ej: Web tester" />
                                <label className="upload-image-label" for="upload-image">Añadir imagen</label>
                                <input className="upload-image input-container" id="upload-image"
                                    type="file" name="upload-image" />
                                <div className="upload-image__container">
                                    <button type="button" className="fake__upload-image">Añadir imagen</button>
                                    <div className="fake__check-upload-image"></div>
                                </div>
                                <label for="email">Email</label>
                                <input className="input-container" placeholder="Ej: PaquitaR@gmail.com"
                                    id="email" type="email" name="email" />
                                <label for="phone">Teléfono</label>
                                <input className="input-container" placeholder="Ej: 666-55-44-33"
                                    id="phone" type="number" name="phone" />
                                <label for="linkedin">Linkedin</label>
                                <input className="input-container" placeholder="Ej: linkedin.com/in/paqui.ram"
                                    id="linkedin" type="text" name="linkedin" />
                                <label for="github">Github</label>
                                <input className="input-container" placeholder="Ej: @paqui-ram"
                                    id="github" type="text" name="github" />
                                <p className="text--skills">Habilidades (máximo 3)</p>
                                <div className="container--skills"></div>
                            </div>
                        </fieldset>
                        <div className="border-section border-section-nomargin"></div>
                        <fieldset className="main__collapsable main__share">
                            <div className="dropdown dropdown__share">
                                <div className="dropdown-icon"> <span className="dropdown-icon icon fas fa-share-alt"></span>

                                    <h2 className="form__title main__share--title">comparte</h2>

                                </div>
                                <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>

                                </div>
                            </div>
                            <div className="main__share--container hidden">
                                <button className="main__share--create hidden" type="button"> <span className="main__share--create- far fa-address-card"></span>
                                    <span className="main__share--create-text">crear tarjeta</span>

                                </button>
                            </div>
                            <div className="border-section"></div>

                            <div className="main__share--generated hidden">
                                <h3 className="main__share--generated-text">La tarjeta ha sido creada:</h3>
                                <a className="main__share--generated-link" href=""></a>

                                <div className="main__share--twitter-button"> <span className="main__share--generated-twitter- fab fa-twitter"></span>

                                    <a
                                        className="main__share--generated-twitter" target="_blank" href="">Compartir en twitter</a>
                                </div>
                                <div className="border-section"></div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;