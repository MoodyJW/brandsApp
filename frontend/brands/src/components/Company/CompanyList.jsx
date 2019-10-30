import React, { Component } from 'react';
import axios from 'axios';
import Company from './Company';
// import CompanyDetails from './CompanyDetails';
// import BrandList from './BrandList/BrandList';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Brand from '../Brand/Brand'

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
        let companiez0;
        let companiez1;
        let companiez2;
        if (this.state.companies.length > 0) {
            companiez = this.state.companies.map((p) =>
                <Company name={p.name} key={p.id} brand_set={p.brand_set} url={p.url} onClick={() => this.setState({loadedID: p.url})}/>)
            console.log('loadedID:', this.state.loadedID)
            console.log('BRANDZ', <Brand/>)
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
                    <Col xs={5}>
                        <Brand company={this.state.loadedID}/>
                    </Col>
                </Row>
        )
    }
}
