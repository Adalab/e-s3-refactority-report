import React, { Component } from 'react';

class Preview extends Component {
    render() {
        return (

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
        );
    }
}
export default Preview;