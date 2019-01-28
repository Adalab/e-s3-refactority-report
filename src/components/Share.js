import React, { Component } from 'react';

class Share extends Component {
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
                    <button className="main__share--create" type="button"> <span className="main__share--create- far fa-address-card"></span>
                        <span className="main__share--create-text">crear tarjeta</span>

                    </button>
                </div>
                <div className="border-section"></div>

                <div className="main__share--generated hidden">
                    <h3 className="main__share--generated-text">La tarjeta ha sido creada:</h3>
                    <a className="main__share--generated-link" href=""></a>

                    <div className="main__share--twitter-button"> <span className="main__share--generated-twitter- fab fa-twitter"></span>

                        <a className="main__share--generated-twitter" target="_blank" href="">Compartir en twitter</a>
                    </div>
                    <div className="border-section"></div>
                </div>
            </fieldset>
        );
    }
}

export default Share;