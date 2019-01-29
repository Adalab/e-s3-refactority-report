import React, { Component } from 'react';
import { sendCard } from './../services/CardServices';


class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twitter: 'hidden',
            linkTwitter: '',
            linkCard: ''
        }
        this.handleShare = this.handleShare.bind(this);
    }

    handleShare() {
        sendCard(this.props.card)
            .then(bonaparte => {
                this.setState({
                    twitter: '',
                    linkTwitter: `https://twitter.com/share?url=${bonaparte.CARDURL}&text=¡Ey! Mira que tarjeta más molona acabo de hacer con Javascript &hashtags=JavaScript, Adalab`,
                    linkCard: bonaparte.CARDURL
                })
            })
    }

    render() {
        return (
            <fieldset className="main__collapsable main__share">
                <div className="dropdown dropdown__share" onClick={this.props.handleCollapsableShare}>
                    <div className="dropdown-icon"> <span className="dropdown-icon icon fas fa-share-alt"></span>

                        <h2 className="form__title main__share--title">comparte</h2>

                    </div>
                    <div className="dropdown-arrow"> <span className="main__arrow fas fa-angle-down"></span>

                    </div>
                </div>
                <div className={this.props.collapsableShare}>
                    <button className="main__share--create" type="button" onClick={this.handleShare}> <span className="main__share--create- far fa-address-card"></span>
                        <span className="main__share--create-text">crear tarjeta</span>

                    </button>
                </div>
                <div className="border-section"></div>

                <div className={`main__share--generated ${this.state.twitter}`}>
                    <h3 className="main__share--generated-text">La tarjeta ha sido creada:</h3>
                    <a className="main__share--generated-link"  target="_blank" href={this.state.linkCard}></a>

                    <div className="main__share--twitter-button"> <span className="main__share--generated-twitter- fab fa-twitter"></span>

                        <a className="main__share--generated-twitter" target="_blank" href={this.state.linkTwitter}>Compartir en twitter</a>
                    </div>
                    <div className="border-section"></div>
                </div>
            </fieldset>
        );
    }
}

export default Share;