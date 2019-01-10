import React, { Component } from 'react';

class Design extends Component {
    render(){
        return(
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
                                                    value="green-palette" name="color-selection" />
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
                                                    name="color-selection" />
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
                                                    name="color-selection" />
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
                                                name="font-selection" />ubuntu</label>
                                    </li>
                                    <li className="main__design--items comic-sans">
                                        <label for="font-comic-sans">
                                            <input checked="checked" className="option-button" id="font-comic-sans" type="radio"
                                                value="font-comic-sans" name="font-selection" />comic sans</label>
                                    </li>
                                    <li className="main__design--items montserrat">
                                        <label for="font-montserrat">
                                            <input className="option-button" id="font-montserrat" type="radio" value="font-montserrat"
                                                name="font-selection" />montserrat</label>
                                    </li>
                                </ul>
                            </div>
                        </fieldset>
        );
    }
}

export default Design;