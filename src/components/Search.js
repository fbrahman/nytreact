import React, { Component } from 'react';
import API from '../utils/API';


class Search extends Component {
    state = {
        query       : '',
        startYear   : '',
        endYear     : '',
        results     : [],
        error       : ''
    };

    handleFormSubmit = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
}