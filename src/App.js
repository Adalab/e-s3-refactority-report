import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import 'core/_variables.scss';
import './App.scss';


class App extends Component {
  render() {
    return (
      <body>
        <div className="page">
            <div className="page__home-container">
               <Header />
                <main className="main__container">
                    <div className="cards--form__container">
                        <section className="main__preview">
                            <div className="preview__container">
                                <button className="preview__reset"> <span className="far fa-trash-alt"></span><span className="preview__reset-text">reset</span>

                                </button>
                                <div className="preview__card">
                                    <div className="preview__title">
                                        <div className="preview__decoration-rectangle preview__decoration-rectangle--green"></div>
                                        <div className="preview__texts">
                                            <p className="font-comic-sans preview__name preview__name--green">Nombre Apellido</p>
                                            <p className="font-comic-sans preview__occupation">Front-end developer</p>
                                        </div>
                                    </div>
                                    <div className="preview__image"></div>
                                    <ul className="icons__container social__container--green preview__social-icons">
                                        <li className="social-icon li__email hidden"></li>
                                        <li className="social-icon li__phone hidden"></li>
                                        <li className="social-icon li__linkedin hidden"></li>
                                        <li className="social-icon li__github hidden"></li>
                                    </ul>
                                    <div className="skills__container">
                                        <ul className="icons__container icons__container--green preview__skills-icons"></ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <form className="main__form">
                            <fieldset className="main__collapsable main__design">
                                <div className=" dropdown dropdown__design">
                                    <div className="dropdown-icon"> <span className="dropdown-icon icon far fa-object-ungroup"></span>

                                         <h2 className="form__title main__design--title">diseña</h2>

                                    </div>
                                    <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>

                                    </div>
                                </div>
                                <div className="main__design--container hidden">
                                    <p className="main__design--titles">colores</p>
                                    <ul className="main__design--colors">
                                        <li className="main__design--items">
                                            <label for="color-green" className="main__design--palette">
                                                <div className="main__design--input">
                                                    <input checked="checked" className="option-button" id="color-green" type="radio"
                                                    value="green-palette" name="color-selection"/>
                                                </div>
                                                <div className="main__design--palette-green">
                                                    <div className="green-dark"></div>
                                                    <div className="green-medium"></div>
                                                    <div className="green-light"></div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="main__design--items">
                                            <label for="color-red" className="main__design--palette">
                                                <div className="main__design--input">
                                                    <input className="option-button" id="color-red" type="radio" value="red-palette"
                                                    name="color-selection"/>
                                                </div>
                                                <div className="main__design--palette-red">
                                                    <div className="red-dark"></div>
                                                    <div className="red-medium"></div>
                                                    <div className="red-light"></div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="main__design--items">
                                            <label for="color-grey" className="main__design--palette">
                                                <div className="main__design--input">
                                                    <input className="option-button" id="color-grey" type="radio" value="grey-palette"
                                                    name="color-selection"/>
                                                </div>
                                                <div className="main__design--palette-grey">
                                                    <div className="grey-dark"></div>
                                                    <div className="grey-medium"></div>
                                                    <div className="grey-light"></div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <p className="main__design--titles">fuentes</p>
                                    <ul className="main__design--fonts">
                                        <li className="main__design--items ubuntu">
                                            <label for="font-ubuntu">
                                                <input className="option-button" id="font-ubuntu" type="radio" value="font-ubuntu"
                                                name="font-selection"/>ubuntu</label>
                                        </li>
                                        <li className="main__design--items comic-sans">
                                            <label for="font-comic-sans">
                                                <input checked="checked" className="option-button" id="font-comic-sans" type="radio"
                                                value="font-comic-sans" name="font-selection"/>comic sans</label>
                                        </li>
                                        <li className="main__design--items montserrat">
                                            <label for="font-montserrat">
                                                <input className="option-button" id="font-montserrat" type="radio" value="font-montserrat"
                                                name="font-selection"/>montserrat</label>
                                        </li>
                                    </ul>
                                </div>
                            </fieldset>
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
                                    className="input-container" placeholder="Ej: Paca Ramirez"/>
                                    <label for="occupation">Puesto</label>
                                    <input id="occupation" type="text" name="occupation" className="input-container"
                                    placeholder="Ej: Web tester"/>
                                    <label className="upload-image-label" for="upload-image">Añadir imagen</label>
                                    <input className="upload-image input-container" id="upload-image"
                                    type="file" name="upload-image"/>
                                    <div className="upload-image__container">
                                        <button type="button" className="fake__upload-image">Añadir imagen</button>
                                        <div className="fake__check-upload-image"></div>
                                    </div>
                                    <label for="email">Email</label>
                                    <input className="input-container" placeholder="Ej: PaquitaR@gmail.com"
                                    id="email" type="email" name="email"/>
                                    <label for="phone">Teléfono</label>
                                    <input className="input-container" placeholder="Ej: 666-55-44-33"
                                    id="phone" type="number" name="phone"/>
                                    <label for="linkedin">Linkedin</label>
                                    <input className="input-container" placeholder="Ej: linkedin.com/in/paqui.ram"
                                    id="linkedin" type="text" name="linkedin"/>
                                    <label for="github">Github</label>
                                    <input className="input-container" placeholder="Ej: @paqui-ram"
                                    id="github" type="text" name="github"/>
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
            </div>
            <Footer />
        </div>
        <script type="text/javascript" src="assets/js/main.min.js"></script>
    </body>
    )
  }
}

export default App;