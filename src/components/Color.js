import React, { Component } from 'react';

class Colors extends Component {
    render(){
        return(
            <React.Fragment>
                <p className="main__design--titles">colores</p>
                    <ul className="main__design--colors">
                        <li className="main__design--items">
                            <label htmlFor="color-green" className="main__design--palette">
                                <div className="main__design--input">
                                    <input defaultChecked="checked" className="option-button" id="color-green" type="radio"
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
                            <label htmlFor="color-red" className="main__design--palette">
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
                            <label htmlFor="color-grey" className="main__design--palette">
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
            </React.Fragment>
        );
    }
}

export default Colors;