import React, { Component } from 'react';

class Skills extends Component {
    componentDidMount () {
        this.props.actionFetch();
    }

    render() {
        
        const arraySkills = this.props.arraySkills.map((skill, index) => {
            return (
                <li key={index}>
                    <label htmlFor={skill} className="option-skills">
                    <input className="option-button option-skills-button" id={skill} type="checkbox" value={skill} name={skill}/>
                    <p className="skills">{skill}</p>
                    </label>
                </li>
            );
        }
    )
        return (
            <React.Fragment>
                <p className="text--skills">Habilidades (máximo 3)</p>
                <ul className="container--skills">
                    {arraySkills}
                </ul>
            </React.Fragment>
        );  
    }
}

export default Skills;
