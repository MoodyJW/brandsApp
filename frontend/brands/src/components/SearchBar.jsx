import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";


export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: "",
        companies: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/companies/')
        .then(response => {
            const companies = response.data
            this.setState({ companies: companies })
            console.log ('COMPANIES:', companies)
        })
        this.refs.search.focus();
    }
  
    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }
  
    render() {
        let _companies = this.state.companies;
        let search = this.state.searchString.trim().toLowerCase();
  
        if (search.length > 0) {
            _companies = _companies.filter(function(company) {
            return company.name.toLowerCase().match(search);
            });
        }
  
        return (
            <Jumbotron>
                <Container>
                    <h1 className='text-center'>Search for a company here</h1>
                    <br></br>
                    <p className='text-center'>
                        Search for a company or just click on a company below to see all <br></br>
                        of the subsidiareies and brands owned by just these ten companies!
                    </p>
                    <br></br>
                    <Form className="justify-content-center" inline>
                        <FormControl 
                            type="text" 
                            value={this.state.searchString} 
                            onChange={this.handleChange}
                            ref="search" 
                            placeholder="Enter company to search" 
                            className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <ListGroup>
                        {_companies.map(l => {
                                    return (
                                    <ListGroup.Item>
                                        <a href="#">{l.name}</a>
                                    </ListGroup.Item>
                                    );
                                })}
                    </ListGroup>
                </Container>
            </Jumbotron>
      );
    }
}