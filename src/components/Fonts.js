import React, { Component } from 'react';

class Fonts extends Component {
    render() {
        const {typo} = this.props;
        return (
            <React.Fragment>
                <p className="main__design--titles">fuentes</p>
                <ul className="main__design--fonts">
                    <li className="main__design--items ubuntu">
                        <label htmlFor="font-ubuntu">
                            <input defaultChecked={(typo === 1) ? true:false} className="option-button" id="font-ubuntu" type="radio" value="1" onClick={this.props.actionTypo}
                                name="font-selection" />ubuntu</label>
                    </li>
                    <li className="main__design--items comic-sans">
                        <label htmlFor="font-comic-sans">
                            <input defaultChecked={(typo === 2) ? true:false} className="option-button" id="font-comic-sans" type="radio"
                                value="2" onClick={this.props.actionTypo} name="font-selection" />comic sans</label>
                    </li>
                    <li className="main__design--items montserrat">
                        <label htmlFor="font-montserrat">
                            <input defaultChecked={(typo === 3) ? true:false} className="option-button" id="font-montserrat" type="radio" value="3" onClick={this.props.actionTypo}
                                name="font-selection" />montserrat</label>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Fonts;