import React, { Component } from 'react';

class Rrss extends Component {
    render() {
        const {card, actionEmail, actionTel, actionLinkedin, actionGit} = this.props;
        return (
            <React.Fragment>
                <label htmlFor="email">Email</label>
                    <input className="input-container" placeholder="Ej: PaquitaR@gmail.com" onChange={actionEmail}
                        id="email" type="email" name="email" value={card.email} />
                    <label htmlFor="phone">Teléfono</label>
                    <input className="input-container" placeholder="Ej: 666-55-44-33" onChange={actionTel}
                        id="phone" type="number" name="phone" value={card.tel} />
                    <label htmlFor="linkedin">Linkedin</label>
                    <input className="input-container" placeholder="Ej: linkedin.com/in/paqui.ram" onChange={actionLinkedin}
                        id="linkedin" type="text" name="linkedin" value={card.linkedin} />
                    <label htmlFor="github">Github</label>
                    <input className="input-container" placeholder="Ej: @paqui-ram" onChange={actionGit}
                        id="github" type="text" name="github" value={card.git} />
            </React.Fragment>
        );
    }
}

export default Rrss;