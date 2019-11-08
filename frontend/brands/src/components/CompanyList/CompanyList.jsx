import React, { Component, useRef, useEffect } from 'react';
import axios from 'axios';
import Company from '../Company/Company.jsx'
import CompanyDetail from '../CompanyDetail/CompanyDetail'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './CompanyList.css'

export default class CompanyList extends Component {

    state = {
        companies: [],
        selectedCompanyId: null
    }

    selectCompanyHandler = (id) => {
        this.setState({ selectedCompanyId: id })
        window.scrollTo(0,0)
    }

    toggleOpenClose = () => {
        this.setState({ selectedCompanyId: null})
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/companies/`)
            .then(response => {
                const companies = response.data
                this.setState({ companies });
                console.log("this is state:  ", this.state)
            })
    }

    render() {
        let companies = <h1>Loading...</h1>
        let companies1 = <h1>Loading...</h1>
        let companies2 = <h1>Loading...</h1>
        let companies3 = <h1>Loading...</h1>
        companies = this.state.companies.filter(company => company.name.toLowerCase().match(this.props.filter))
        console.log("co.s", companies)
        companies = companies.map(company => <Company key={company.id} name={company.name} img_url={company.img_url} click={() => this.selectCompanyHandler(company.id)} cid={company.cid}/>)
        companies1 = companies.filter((c, i)=> i%3 === 0)
        companies2 = companies.filter((c, i)=> i%3 === 1)
        companies3 = companies.filter((c, i)=> i%3 === 2)

        if (this.state.selectedCompanyId !== null) {
            return (
                <>
                    <Container style={{ justifyContent: 'center' }}>>
                        <Row >
                            <Button onClick={() => this.toggleOpenClose()}>X</Button>
                        </Row>
                        
                        <Row className='needs-space'>
                            {companies1}
                            {companies2}
                            {companies3}
                        </Row>
                    </Container>           
                </>         
                )
        } else { 
            return (
                <>
                    <Container>
                        <Row>
                            {companies1}
                            {companies2}
                            {companies3}
                        </Row>
                    </Container>           
                </> 
                )
        }
    }
}
