import React, { Component } from 'react';
import axios from 'axios';

import BrandList from '../BrandList/BrandList.jsx';
import CompanyList from '../Company/CompanyList.jsx';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
  
    componentDidMount() {
        Promise.all([
            axios.get('http://127.0.0.1:8000/politicians/')
        ]).then(([politicianData]) => {
            const politicians = politicianData.data
            this.setState({politicians: politicians})
        })
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
    
    render() {
        let _politicians = this.state.politicians;
        let politicianSearch = this.state.politicianSearchString.trim().toLowerCase();
        if (politicianSearch.length > 0) {
            _politicians = _politicians.filter(function(politician) {
                return politician.name.toLowerCase().match(politicianSearch);
            });
        }
  
        return (
            <Jumbotron>
                <Container>
                    <Tabs defaultActiveKey="companies" id="search-tab">
                        <Tab eventKey="companies" title="Companies">
                            <h1 className='text-center'>Search for a company by name</h1>
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
                            </Form>
                            <br></br>
                            <ListGroup>
                                <CompanyList filter={this.state.companySearchString}></CompanyList>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="brands" title="Brands">
                            <h1 className='text-center'>Search for a brand by name</h1>
                            <br></br>
                            <Form className="justify-content-center" inline autoFocus>
                                <FormControl 
                                    type="text" 
                                    value={this.state.brandSearchString} 
                                    onChange={this.handleBrandChange}
                                    ref="brandSearch" 
                                    placeholder="Enter brand to search" 
                                    className="mr-sm-2" />
                            </Form>
                            <br></br>
                            <ListGroup>
                                <BrandList filter={this.state.brandSearchString}></BrandList>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="politicians" title="Politicans">
                            <h1 className='text-center'>Search for a politician by name</h1>
                            <br></br>
                            <Form className="justify-content-center" inline>
                                <FormControl 
                                    type="text" 
                                    value={this.state.politicianSearchString} 
                                    onChange={this.handlePoliticianChange}
                                    ref="politicianSearch" 
                                    placeholder="Enter name to search" 
                                    className="mr-sm-2" />
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