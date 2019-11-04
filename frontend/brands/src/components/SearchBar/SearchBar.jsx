import React, { Component } from 'react';

import BrandList from '../BrandList/BrandList.jsx';
import CompanyList from '../Company/CompanyList.jsx';
import PoliticianList from '../Politicians/PoliticianList.jsx'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const jumboStyle = {
    border: '1px solid',
    maxHeight: '95%',
}

const containerStyle = {
    maxWidth: '95%',
    margin: 'auto',
}

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        companySearchString: "",
        brandSearchString: "",
        politicianSearchString: "",
      };
      this.handleBrandChange = this.handleBrandChange.bind(this);
      this.handleCompanyChange = this.handleCompanyChange.bind(this);
      this.handlePoliticianChange = this.handlePoliticianChange.bind(this);
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
        return (
            <Container style={containerStyle}>
                <Jumbotron style={jumboStyle}>
                    <Container>
                        <Tabs defaultActiveKey="companies" id="search-tab" mountOnEnter={true}>
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
                                <ListGroup inline>
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
                                    <PoliticianList filter={this.state.politicianSearchString}></PoliticianList>
                                </ListGroup>
                            </Tab>
                        </Tabs>
                    </Container>
                </Jumbotron>
            </Container>
      );
    }
}