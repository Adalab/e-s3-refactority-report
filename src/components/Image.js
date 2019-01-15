import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <React.Fragment>
                <label className="upload-image-label" htmlFor="upload-image">Añadir imagen</label>
                <input className="upload-image input-container" id="upload-image"
                    type="file" name="upload-image" />
                <div className="upload-image__container">
                    <button type="button" className="fake__upload-image">Añadir imagen</button>
                    <div className="fake__check-upload-image"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Image;