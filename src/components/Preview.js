import React, { Component } from 'react';
import Card from './Card';

class Preview extends Component {
    render() {
        return (
            <section className="main__preview">
                <div className="preview__container">
                    <button className="preview__reset"> <span className="far fa-trash-alt"></span><span className="preview__reset-text">reset</span>
                    </button>
                    <Card />
                </div>
            </section>
        );
    }
}

export default Preview;