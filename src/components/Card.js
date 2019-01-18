import React, { Component} from 'react';

const fonts = ['','font-ubuntu', 'font-comic-sans', 'font-montserrat'];
class Card extends Component {

    writeEmailIcon(email) {
        let link;
        
        if (email === '') {
            link = (
                <li className="social-icon li__email hidden">
                    <a className="socialicons-style" href={`mailto:${email}`}><span className="far fa-envelope"></span></a>
                </li>);
        } else {
            link = (
                <li className="social-icon li__email">
                    <a className="socialicons-style" href={`mailto:${email}`}><span className="far fa-envelope"></span></a>
                </li>);
        }
        
        return link;
    }

    writeTelIcon(tel) {
        let link;

        if (tel === '') {
            link = (
                <li className="social-icon li__tel hidden">
                    <a className="socialicons-style" href={`tel:${tel}`}><span className="fas fa-mobile-alt"></span></a>
                </li>);
        } else {
            link = (
                <li className="social-icon li__tel">
                    <a className="socialicons-style" href={`tel:${tel}`}><span className="fas fa-mobile-alt"></span></a>
                </li>);
        }
        
        return link;
    }

    writeLinkedinIcon(linkedin) {
        let link;

        if (linkedin === '') {
            link = (
                <li className="social-icon li__linkedin hidden">
                    <a className="socialicons-style" href={`https://www.linkedin.com/in/:${linkedin}`}><span className="fab fa-linkedin-in"></span></a>
                </li>);
        } else {
            link = (
                <li className="social-icon li__linkedin">
                    <a className="socialicons-style" href={`https://www.linkedin.com/in/:${linkedin}`}><span className="fab fa-linkedin-in"></span></a>
                </li>);
        }
        
        return link;
    }

    writeGitIcon(git) {
        let link;

        if (git === '') {
            link = (
                <li className="social-icon git hidden">
                    <a className="socialicons-style" href={`https://www.linkedin.com/in/:${git}`}><span className="fab fa-github-alt"></span></a>
                </li>);
        } else {
            link = (
                <li className="social-icon git">
                    <a className="socialicons-style" href={`https://www.linkedin.com/in/:${git}`}><span className="fab fa-github-alt"></span></a>
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
                        <p className={`${fonts[card.typography]} preview__occupation`}>{card.name}</p>
                        <p className={`${fonts[card.typography]} preview__occupation`}>{card.job}</p>
                    </div>
                </div>
                <div className="preview__image" style={{backgroundImage: `url(${card.image})`}}></div>
                <ul className="icons__container social__container--green preview__social-icons">
                    {this.writeEmailIcon(card.email)}
                    {this.writeTelIcon(card.tel)}
                    {this.writeLinkedinIcon(card.linkedin)}
                    {this.writeGitIcon(card.git)}
                </ul>
                <div className="skills__container">
                    <ul className="icons__container icons__container--green preview__skills-icons"></ul>
                </div>
            </div>
        );
    }
}

export default Card;

                    