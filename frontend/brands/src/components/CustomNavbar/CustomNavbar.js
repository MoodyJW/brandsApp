import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default class CustomNavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            search:''
        }
    }

    handleChange(e){
        this.setState({
            search:e.target.value
        })
    }

    render () {
        return(
            <Navbar fixed='top' >
                <LinkContainer to='/'>
                    <Navbar.Brand>brandsApp</Navbar.Brand>
                </LinkContainer>
                <Nav className="pr-0">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/companies'>
                        <Nav.Link>Companies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/brands'>
                        <Nav.Link>Brands</Nav.Link>
                    </LinkContainer>
                </Nav>

            </Navbar>
        )
    }
}