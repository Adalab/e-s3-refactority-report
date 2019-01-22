import React, { Component } from 'react';

class Colors extends Component {
    render(){
        const {palette} = this.props;

        return(
            <React.Fragment>
                <p className="main__design--titles">colores</p>
                    <ul className="main__design--colors">
                        <li className="main__design--items">
                            <label htmlFor="color-green" className="main__design--palette">
                                <div className="main__design--input">
                                    <input checked={(palette === 1) ? true:false} className="option-button" id="color-green" type="radio"
                                        value="1" onClick={this.props.actionColor} name="color-selection" />
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
                                    <input checked={(palette === 2) ? true:false} className="option-button" id="color-red" type="radio" value="2" onClick={this.props.actionColor}
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
                                    <input checked={(palette === 3) ? true:false} className="option-button" id="color-grey" type="radio" value="3" onClick={this.props.actionColor}
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