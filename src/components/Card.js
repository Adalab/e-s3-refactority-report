import React, { Component} from 'react';

class Card extends Component {

    writeEmailIcon(email) {

        let link;
        if (email === '') {
            link = (
                <li className="social-icon li__email hidden">
                    <a class="socialicons-style" href={`mailto:${email}`}><span class="far fa-envelope"></span></a>
                </li>);
        } else {
            link = (
                <li className="social-icon li__email">
                    <a class="socialicons-style" href={`mailto:${email}`}><span class="far fa-envelope"></span></a>
                </li>);
        }
        
        return link;
    }
    render(){
        const {card} = this.props;
        return(
            <div className="preview__card">
                <div className="preview__title">
                    <div className="preview__decoration-rectangle preview__decoration-rectangle--green"></div>
                    <div className="preview__texts">
                        <p className="font-comic-sans preview__name preview__name--green">{card.name}</p>
                        <p className="font-comic-sans preview__occupation">{card.job}</p>
                    </div>
                </div>
                <div className="preview__image"></div>
                <ul className="icons__container social__container--green preview__social-icons">
                    {this.writeEmailIcon(card.email)}
                    <li className="social-icon li__phone hidden"></li>
                    <li className="social-icon li__linkedin hidden"></li>
                    <li className="social-icon li__github hidden"></li>
                </ul>
                <div className="skills__container">
                    <ul className="icons__container icons__container--green preview__skills-icons"></ul>
                </div>
            </div>
        );
    }
}

export default Card;

                    