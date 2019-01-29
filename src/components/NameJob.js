import React, { Component } from 'react';

class NameJob extends Component {
    setNameValue(name) {
        return (name === 'Nombre Apellido') ? '':name;
    }
    setJobValue(job) {
        return (job === 'front-end developer') ? '':job;
    }
    render() {
        const {actionName, valueName, actionJob, valueJob} = this.props;
        return (
            <React.Fragment>
                <label htmlFor="full-name">Nombre completo</label>
                <input id="full-name" type="text" name="full-name" value={this.setNameValue(valueName)}
                    className="input-container" placeholder="Ej: Paca Ramirez" onChange={actionName} />
                <label htmlFor="occupation">Puesto</label>
                <input id="occupation" value={this.setJobValue(valueJob)} type="text" name="occupation" className="input-container"
                    placeholder="Ej: Web tester" onChange={actionJob} />
            </React.Fragment>
        );
    }
}

export default NameJob;
