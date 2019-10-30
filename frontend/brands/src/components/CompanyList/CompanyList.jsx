import React, { Component } from 'react';
import axios from 'axios';

export default class CompanyList extends Component {
    state = {
        companies: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/companies/`)
            .then(response => {
                const companies = response.data
                this.setState({ companies });
                console.log (companies);
            })
    }

    render() {
        return (
            <ul>
                { this.state.companies.map(company => <li>{company.name}</li>) }            
            </ul>
        )
    }
}
