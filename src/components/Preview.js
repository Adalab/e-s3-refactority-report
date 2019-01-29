import React, { Component } from 'react';
import Card from './Card';

class Preview extends Component {
    render() {
        const {card, handleReset} = this.props;
        return (
            <section className="main__preview">
                <div className="preview__container">
                    <button onClick={handleReset} className="preview__reset"> <span className="far fa-trash-alt"></span><span className="preview__reset-text">reset</span>
                    </button>
                    <Card card={card}/>
                </div>
            </section>
        );
    }
}

export default Preview;