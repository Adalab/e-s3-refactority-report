import React, { Component } from 'react';
import Header from './Header';
import MainCreator from './MainCreator';
import Footer from './Footer';

class Creator extends Component {
    render() {
      
    const {card, arraySkills, actionName, valueName, actionJob, valueJob, actionEmail, actionTel, actionLinkedin, actionGit, handleUrl, imageDefault, actionTypo, actionColor, actionFetch, actionFillS, handleReset, handleCollapsable, collapsable, handleCollapsableFill, collapsableFill, collapsableShare, handleCollapsableShare} = this.props;

        return(
            <React.Fragment>
                <Header />
                  <MainCreator actionName={actionName} valueName={valueName} actionJob={actionJob} valueJob={valueJob} imageDefault={imageDefault} handleUrl={handleUrl} arraySkills={arraySkills} card={card} actionEmail={actionEmail} actionTel={actionTel} actionLinkedin={actionLinkedin} actionGit={actionGit} actionTypo={actionTypo} actionColor={actionColor} actionFetch={actionFetch} actionFillS={actionFillS} handleReset={handleReset} handleCollapsable={handleCollapsable} collapsable={collapsable} handleCollapsableFill={handleCollapsableFill} collapsableFill={collapsableFill} collapsableShare={collapsableShare} handleCollapsableShare={handleCollapsableShare}/>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Creator;