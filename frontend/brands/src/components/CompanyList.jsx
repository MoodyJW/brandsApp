import React, { Component } from 'react';
import axios from 'axios';
import Company from './Company';
import CompanyDetails from './CompanyDetails';

export default class CompanyList extends Component {
    state = {
        companies: [],
        loadedID: null,
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/companies/`)
            .then(response => {
                const companies = response.data
                this.setState({ companies: companies });
                console.log (companies);
            })
    }

    render() {
        let companiez = <p>No company loaded, select a company!</p>

        if (this.state.companies.length > 0) {
            companiez = this.state.companies.map((p) =>
                <Company name={p.name} key={p.id} onClick={() => this.setState({loadedID: p.id})}/>
            )
        }
        return (
            <ul>
                <CompanyDetails id={this.state.loadedID}/>
                {companiez}         
            </ul>
        )
    }
}
