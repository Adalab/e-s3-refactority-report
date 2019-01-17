import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';



class MainCreator extends Component {
    render() {
        const {card, arraySkills, actionName, actionJob, handleUrl, imageDefault} = this.props;

        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview card={card}/>
                    <form className="main__form">
                        <Design />
                        <div className="border-section border-section-nomargin"></div>
                        <Fill imageDefault={imageDefault} actionName={actionName} actionJob={actionJob} handleUrl={handleUrl} arraySkills={arraySkills} card={card}/>
                        <div className="border-section border-section-nomargin"></div>
                        <Share />
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;