import React, { Component } from 'react';

class NameJob extends Component {
    render() {
        return (
            <React.Fragment>
            <label for="full-name">Nombre completo</label>
            <input id="full-name" type="text" name="full-name"
                className="input-container" placeholder="Ej: Paca Ramirez" />
            <label for="occupation">Puesto</label>
            <input id="occupation" type="text" name="occupation" className="input-container"
                placeholder="Ej: Web tester" />
            </React.Fragment>
        );
    }
}

export default NameJob;
