import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const arraySkills = this.props.arraySkills.map((skill, index)) => {
            return (
                console.log (index);
            );
        }
        return (
            <React.Fragment>
            <p className="text--skills">Habilidades (máximo 3)</p>
            <div className="container--skills">{arraySkills}</div>
            </React.Fragment>
        );
    }
}

export default Skills;