import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Button from "react-bootstrap/Button";

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        companySearchString: "",
        brandSearchString: "",
        politicianSearchString: "",
        companies: [],
        brands: [],
        politicians: [],
      };
      this.handleBrandChange = this.handleBrandChange.bind(this);
      this.handleCompanyChange = this.handleCompanyChange.bind(this);
      this.handlePoliticianChange = this.handlePoliticianChange.bind(this);
    }
  
    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/companies/')
    //     .then(response => {
    //         const companies = response.data
    //         this.setState({ companies: companies })
    //         console.log ('COMPANIES:', companies)
    //     })
    //     this.refs.search.focus();
    // }

    componentDidMount() {
        Promise.all([
            axios.get('http://127.0.0.1:8000/companies/'),
            axios.get('http://127.0.0.1:8000/brands/'),
            axios.get('http://127.0.0.1:8000/politicians/')
        ]).then(([compData, brandData, politicianData]) => {
            const companies = compData.data
            const brands = brandData.data
            const politicians = politicianData.data
            this.setState({companies: companies, brands: brands, politicians: politicians})
        })
        // this.refs.companySearch.focus();
      }
  
    handleCompanyChange() {
        this.setState({
            companySearchString: this.refs.companySearch.value,
        });
    }
    handleBrandChange() {
        this.setState({
            brandSearchString: this.refs.brandSearch.value,
        });
    }
    handlePoliticianChange() {
        this.setState({
            politicianSearchString: this.refs.politicianSearch.value,
        });
    }
    // handleBrandClick = () => {
    //     this.setState({
    //         brandSearchString: "",
    //     })
    // }
    // handleCompanyClick = () => {
    //     this.setState({
    //         companySearchString: "",
    //     })
    // }
    // handlePoliticianClick = () => {
    //     this.setState({
    //         politicianSearchString: "",
    //     })
    // }
    render() {
        let _companies = this.state.companies;
        let _brands  = this.state.brands;
        let _politicians = this.state.politicians;
        let companySearch = this.state.companySearchString.trim().toLowerCase();
        let brandSearch = this.state.brandSearchString.trim().toLowerCase();
        let politicianSearch = this.state.politicianSearchString.trim().toLowerCase();
  
        if (companySearch.length > 0) {
            _companies = _companies.filter(function(company) {
                return company.name.toLowerCase().match(companySearch);
            });
        if (brandSearch.length > 0) {
            _brands = _brands.filter(function(brand) {
                return brand.name.toLowerCase().match(brandSearch);
            });
        }
        if (politicianSearch.length > 0) {
            _politicians = _politicians.filter(function(politician) {
                return politician.name.toLowerCase().match(politicianSearch);
            });
        }
            
        }
  
        return (
            <Jumbotron>
                <Container>
                    <Tabs defaultActiveKey="companies" id="search-tab" >
                        <Tab eventKey="companies" title="Companies">
                            <h1 className='text-center'>Search for a company</h1>
                            <p className='text-center text-muted'>Or select a different tab above</p>
                            <br></br>
                            <Form className="justify-content-center" inline>
                                <FormControl 
                                    type="text" 
                                    value={this.state.companySearchString} 
                                    onChange={this.handleCompanyChange}
                                    ref="companySearch" 
                                    placeholder="Enter company to search" 
                                    className="mr-sm-2" 
                                    />
                                {/* <Button variant="outline-info">Search</Button> */}
                            </Form>
                            <br></br>
                            <ListGroup>
                                {_companies.map(l => {
                                            return (
                                                <ListGroup.Item key={l.id}>
                                                    <a href={"http://127.0.0.1:8000/companies/" + l.id}>{l.name}</a>
                                                </ListGroup.Item>
                                            );
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="brands" title="Brands">
                            <h1 className='text-center'>Search for a brand</h1>
                            <p className='text-center text-muted'>Or select a different tab above</p>
                            <br></br>
                            <Form className="justify-content-center" inline>
                                <FormControl 
                                    type="text" 
                                    value={this.state.brandSearchString} 
                                    onChange={this.handleBrandChange}
                                    ref="brandSearch" 
                                    placeholder="Enter brand to search" 
                                    className="mr-sm-2" />
                                {/* <Button variant="outline-info">Search</Button> */}
                            </Form>
                            <br></br>
                            <ListGroup>
                                {_brands.map(l => {
                                            return (
                                                <ListGroup.Item key={l.id}>
                                                    <a href={"http://127.0.0.1:8000/brands/" + l.id}>{l.name}</a>
                                                </ListGroup.Item>
                                            );
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="politicians" title="Politicans">
                            <h1 className='text-center'>Search for a politician</h1>
                            <p className='text-center text-muted'>Or select a different tab above</p>
                            <br></br>
                            <Form className="justify-content-center" inline>
                                <FormControl 
                                    type="text" 
                                    value={this.state.politicianSearchString} 
                                    onChange={this.handlePoliticianChange}
                                    ref="politicianSearch" 
                                    placeholder="Enter name to search" 
                                    className="mr-sm-2" />
                                {/* <Button variant="outline-info">Search</Button> */}
                            </Form>
                            <br></br>
                            <ListGroup>
                                {_politicians.map(l => {
                                            return (
                                                <ListGroup.Item key={l.id}>
                                                    <a href={"http://127.0.0.1:8000/politicians/" + l.id}>{l.name}</a>
                                                </ListGroup.Item>
                                            );
                                })}
                            </ListGroup>
                        </Tab>
                    </Tabs>
                </Container>
            </Jumbotron>
      );
    }
}