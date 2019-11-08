import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export default class CustomNav extends Component {
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
            <Navbar fixed='top' bg="dark" variant="dark">
                <LinkContainer to='/'>
                    <Navbar.Brand>brandsApp</Navbar.Brand>
                </LinkContainer>
                <Nav className="pr-0">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/climatedata'>
                        <Nav.Link>Climate Data</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/brands'>
                        <Nav.Link>Brands</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        )
    }
}