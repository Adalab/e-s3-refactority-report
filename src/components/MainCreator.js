import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';



class MainCreator extends Component {
    render() {

        const {card, cardTitles, arraySkills, actionName, valueName, actionJob, valueJob, actionEmail, actionTel, actionLinkedin, actionGit, handleUrl, imageDefault, actionTypo, actionColor, actionFetch, actionFillS, handleReset} = this.props;

        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview card={card} cardTitles={cardTitles} handleReset={handleReset}/>
                    <form className="main__form"> 
                        <Design actionColor={actionColor} actionTypo={actionTypo} card={card} />
                        <div className="border-section border-section-nomargin"></div>
                        <Fill actionName={actionName} valueName={valueName} actionJob={actionJob} valueJob={valueJob} arraySkills={arraySkills} actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} card={card} imageDefault={imageDefault} handleUrl={handleUrl} actionFetch={actionFetch} actionFillS={actionFillS}/>
                        <div className="border-section border-section-nomargin"></div>
                        <Share />
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;