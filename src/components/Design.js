import React, { Component } from 'react';
import Colors from './Color';
import Fonts from './Fonts';

class Design extends Component {
    render() {
        const {actionTypo, card} = this.props;
        return (
            <fieldset className="main__collapsable main__design">
                <div className=" dropdown dropdown__design">
                    <div className="dropdown-icon"><span className="dropdown-icon icon far fa-object-ungroup"></span>
                        <h2 className="form__title main__design--title">diseña</h2>
                    </div>
                    <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>
                    </div>
                </div>
                <div className="main__design--container hidden">
                    <Colors />
                    <Fonts typo={card.typography} actionTypo={actionTypo} />
                </div>
            </fieldset>
        );
    }
}

export default Design;