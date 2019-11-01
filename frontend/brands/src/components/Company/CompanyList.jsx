import React, { Component } from 'react';
import axios from 'axios';
import Company from './Company';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
// import Brand from '../Brand/Brand'

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
            })
    }

    render() {
        let companiez = <p>No company loaded, select a company!</p>
        let companiez0;
        let companiez1;
        let companiez2;
        if (this.state.companies.length > 0) {
            companiez = this.state.companies.filter(company => company.name.toLowerCase().match(this.props.filter))
            companiez = companiez.map((p) =>
                <Company name={p.name} key={p.id} brand_set={p.brand_set} onClick={() => this.setState({loadedID: p.id})}/>)
            companiez0 = companiez.filter((p, i) => i % 3 === 0);
            companiez1 = companiez.filter((p, i) => i % 3 === 1);
            companiez2 = companiez.filter((p, i) => i % 3 === 2);
        }
        return (
                <Row>
                    <Col>
                        {companiez0}
                    </Col>
                    <Col>
                        {companiez1}
                    </Col>
                    <Col>
                        {companiez2}
                    </Col>
                </Row>
        )
    }
}
