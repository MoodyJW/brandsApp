import React, { Component } from 'react';
import axios from 'axios';
import Brand from './Brand/Brand.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CompanyDetails extends Component {

    state = {
        company: null,
        loadedID: null,
    }
    
    loadCompany = async () => {
        let resp = await axios.get('http://127.0.0.1:8000/companies/' + this.props.id)
        console.log ('loadCompany:', resp)
        this.setState({company: resp.data, loadedID: resp.data.id})
    }

    render = () => {
        let company = <p>Select a company!</p>
        let company0;
        let company1;
        let company2;
        if (this.state.company) {
            company = this.state.company.brand_set.map((brand) => <li><Brand key={brand.id} name={brand.name}/></li>)
            company0 = company.filter((p, i) => i % 3 === 0);
            company1 = company.filter((p, i) => i % 3 === 1);
            company2 = company.filter((p, i) => i % 3 === 2);
        }
        if (this.props.id && this.props.id !== this.state.loadedID) {
            this.loadCompany()
        }

        return (
            <Row>
                <Col>
                    {company0}
                </Col>
                <Col>
                    {company1}
                </Col>
                <Col>
                    {company2}
                </Col>
            </Row>
        )
    }
}