import React, { Component } from 'react';
import NameJob from './NameJob';
import Image from './Image';
import Rrss from './Rrss';
import Skills from './Skills';

class Fill extends Component {
    render() {
        const {collapsableFill, handleCollapsableFill, arraySkills, actionName, valueName, actionJob, valueJob, actionEmail, actionTel, actionLinkedin, actionGit,  handleUrl, imageDefault, card, actionFetch, actionFillS} = this.props;
        return (
            <fieldset className="main__collapsable main__fill">
                <div className="dropdown dropdown__fill" onClick={handleCollapsableFill}>
                    <div className="dropdown-icon"> <span className="dropdown-icon icon far fa-keyboard"></span>

                        <h2 className="form__title main__fill--title">rellena</h2>

                    </div>
                    <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>

                    </div>
                </div>
                <div className={collapsableFill}>
                    <NameJob actionName={actionName} valueName={valueName} actionJob={actionJob} valueJob={valueJob} />
                    <Image card={card} imageDefault={imageDefault} handleUrl={handleUrl} />
                    <Rrss actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} card={card} />
                    <Skills arraySkills={arraySkills} actionFetch={actionFetch} actionFillS={actionFillS}/>
                </div>
            </fieldset>
        );
    }
}

export default Fill;