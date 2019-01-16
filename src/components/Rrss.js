import React, { Component } from 'react';

class Rrss extends Component {
    render() {
        const {actionEmail, actionTel, actionLinkedin, actionGit} = this.props;
        return (
            <React.Fragment>
                <label htmlFor="email">Email</label>
                    <input className="input-container" placeholder="Ej: PaquitaR@gmail.com" onKeyUp={actionEmail}
                        id="email" type="email" name="email"/>
                    <label htmlFor="phone">Teléfono</label>
                    <input className="input-container" placeholder="Ej: 666-55-44-33" onKeyUp={actionTel}
                        id="phone" type="number" name="phone" />
                    <label htmlFor="linkedin">Linkedin</label>
                    <input className="input-container" placeholder="Ej: linkedin.com/in/paqui.ram" onKeyUp={actionLinkedin}
                        id="linkedin" type="text" name="linkedin" />
                    <label htmlFor="github">Github</label>
                    <input className="input-container" placeholder="Ej: @paqui-ram" onKeyUp={actionGit}
                        id="github" type="text" name="github" />
            </React.Fragment>
        );
    }
}

export default Rrss;