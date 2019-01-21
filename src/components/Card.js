import React, { Component} from 'react';

const fonts = ['','font-ubuntu', 'font-comic-sans', 'font-montserrat'];
const color = ['', 'preview__name--green', 'preview__name--red', 'preview__name--grey' ];
const bg = ['', 'preview__decoration-rectangle--green', 'preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey'];
const border = ['', 'social__container--green', 'social__container--red', 'social__container--grey' ]

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
                <li className={`social-icon li__email ${border[this.props.card.palette]}`}>
                    <a className={`socialicons-style ${color[this.props.card.palette]}`} href={`mailto:${email}`}><span className="far fa-envelope"></span></a>
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
                <li className={`social-icon li__tel ${border[this.props.card.palette]}`}>
                    <a className={`socialicons-style ${color[this.props.card.palette]}`} href={`tel:${tel}`}><span className="fas fa-mobile-alt"></span></a>
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
                <li className={`social-icon li__linkedin ${border[this.props.card.palette]}`}>
                    <a className={`socialicons-style ${color[this.props.card.palette]}`}href={`https://www.linkedin.com/in/:${linkedin}`}><span className="fab fa-linkedin-in"></span></a>
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
                <li className={`social-icon git ${border[this.props.card.palette]}`}>
                    <a className={`socialicons-style  ${color[this.props.card.palette]}`} href={`https://www.linkedin.com/in/:${git}`}><span className="fab fa-github-alt"></span></a>
                </li>);
        }
        
        return link;
    }

    render(){
        const {card, cardTitles} = this.props;
        const arraySkills = card.skills.map((skill, index) => {
            return (
                <li key={index}>
                    <div>{skill}</div>
                </li>
            );})

        return(
            <div className="preview__card">
                <div className="preview__title">
                    <div className={`preview__decoration-rectangle ${bg[card.palette]}`}></div>
                    <div className="preview__texts">
                        <p className={`${fonts[card.typography]} ${color[card.palette]} preview__name`}>{cardTitles.name}</p>
                        <p className={`${fonts[card.typography]} preview__occupation`}>{cardTitles.job}</p>
                    </div>
                </div>
                <div className="preview__image" style={{backgroundImage: `url(${card.image})`}}></div>
                <ul className="preview__social-icons">
                    {this.writeEmailIcon(card.email)}
                    {this.writeTelIcon(card.tel)}
                    {this.writeLinkedinIcon(card.linkedin)}
                    {this.writeGitIcon(card.git)}
                </ul>
                <div className="skills__container">
                    <ul className="icons__container icons__container--green preview__skills-icons">
                        {arraySkills}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Card;

                    