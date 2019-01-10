import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


class Creator extends Component {
    render() {
        return(
            <Design />
            <Fill />
            <Share />
        );
    }
}


export default Creator;