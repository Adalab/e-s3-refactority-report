import React, { Component } from 'react';

class NameJob extends Component {
    render() {
        const {actionName} = this.props;

        return (
            <React.Fragment>
                <label htmlFor="full-name">Nombre completo</label>
                <input id="full-name" type="text" name="full-name"
                    className="input-container" placeholder="Ej: Paca Ramirez" onKeyUp={actionName} />
                <label htmlFor="occupation">Puesto</label>
                <input id="occupation" type="text" name="occupation" className="input-container"
                    placeholder="Ej: Web tester" />
            </React.Fragment>
        );
    }
}

export default NameJob;
