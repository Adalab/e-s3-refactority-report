import React, { Component } from 'react';

const fr = new FileReader();


class Image extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef(); //busca la referencia para el botón porque no se hará un querySelector
        this.fileName = 'Nombre de archivo por defecto';

        this.fakeClick = this.fakeClick.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.writeImage = this.writeImage.bind(this);
    }
    fakeClick() {
        this.fileInput.current.click();
    }
    handleFileChange(e) {
        const myFile = e.currentTarget.files[0];
        fr.addEventListener('load', this.writeImage);
        fr.readAsDataURL(myFile);
    }
    writeImage() {
        const url = fr.result;
        this.props.handleUrl(url);
    }
    render() {
        return (
            <React.Fragment>
                <label className="upload-image-label" htmlFor="upload-image">Añadir imagen</label>
                <input className="upload-image input-container" id="upload-image"
                    type="file" name="upload-image" ref={this.fileInput} onChange={this.handleFileChange} />
                <div className="upload-image__container">
                    <button type="button" className="fake__upload-image" onClick={this.fakeClick}>Añadir imagen</button>
                    <div className="fake__check-upload-image" style={{ backgroundImage: `url(${this.fileUrl})` }}></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Image;