import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';



class MainCreator extends Component {
    render() {

        const {card, arraySkills, actionName, valueName, actionJob, valueJob, actionEmail, actionTel, actionLinkedin, actionGit, handleUrl, imageDefault, actionTypo, actionColor, actionFetch, actionFillS, handleReset, handleCollapsable, collapsable, handleCollapsableFill, collapsableFill} = this.props;

        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview card={card} handleReset={handleReset}/>
                    <form className="main__form"> 
                        <Design actionColor={actionColor} actionTypo={actionTypo} card={card} handleCollapsable={handleCollapsable} collapsable={collapsable}/>
                        <div className="border-section border-section-nomargin"></div>
                        <Fill actionName={actionName} valueName={valueName} actionJob={actionJob} valueJob={valueJob} arraySkills={arraySkills} actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} card={card} imageDefault={imageDefault} handleUrl={handleUrl} actionFetch={actionFetch} actionFillS={actionFillS}  handleCollapsableFill={handleCollapsableFill} collapsableFill={collapsableFill}/>
                        <div className="border-section border-section-nomargin"></div>
                        <Share handleCollapsable={handleCollapsable} collapsable={collapsable}/>
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;