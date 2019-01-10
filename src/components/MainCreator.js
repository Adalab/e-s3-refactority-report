import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';



class MainCreator extends Component {
    render() {
        return (
            <main className="main__container">
                <div className="cards--form__container">
                   <Preview />
                    <form className="main__form">
                        <Design />
                        <div className="border-section border-section-nomargin"></div>
                        <Fill />
                        <div className="border-section border-section-nomargin"></div>
                        <Share />
                    </form>
                </div>
            </main>
        );
    }
}

export default MainCreator;