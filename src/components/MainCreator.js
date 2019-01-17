import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';



class MainCreator extends Component {
    render() {
        const {card, arraySkills, actionName, actionJob, actionEmail, actionTel, actionLinkedin, actionGit, actionTypo} = this.props;

        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview card={card}/>
                    <form className="main__form">
                        <Design actionTypo={actionTypo} />
                        <div className="border-section border-section-nomargin"></div>
                        <Fill actionName={actionName} actionJob={actionJob} arraySkills={arraySkills} actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} />
                        <div className="border-section border-section-nomargin"></div>
                        <Share />
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;