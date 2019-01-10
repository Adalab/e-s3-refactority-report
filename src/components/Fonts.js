import React, { Component } from 'react';

class Fonts extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default Fonts;