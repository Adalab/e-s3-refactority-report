import React, { Component } from 'react';

class Fonts extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="main__design--titles">fuentes</p>
                <ul className="main__design--fonts">
                    <li className="main__design--items ubuntu">
                        <label htmlFor="font-ubuntu">
                            <input className="option-button" id="font-ubuntu" type="radio" value="1" onClick={this.props.actionTypo}
                                name="font-selection" />ubuntu</label>
                    </li>
                    <li className="main__design--items comic-sans">
                        <label htmlFor="font-comic-sans">
                            <input defaultChecked="checked" className="option-button" id="font-comic-sans" type="radio"
                                value="2" onClick={this.props.actionTypo} name="font-selection" />comic sans</label>
                    </li>
                    <li className="main__design--items montserrat">
                        <label htmlFor="font-montserrat">
                            <input className="option-button" id="font-montserrat" type="radio" value="3" onClick={this.props.actionTypo}
                                name="font-selection" />montserrat</label>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Fonts;