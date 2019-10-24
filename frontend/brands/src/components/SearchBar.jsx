import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default class SearchBar extends Component {
    render () {
        return(
            <Jumbotron>
                <Container>
                    <h1 className='text-center'>Hello, world!</h1>
                    <br></br>
                    <p className='text-center'>
                        Search for your favorite brand or just click on a company below to see all <br></br>
                        of the subsidiareies and brands owned by just these ten companies!
                    </p>
                    <br></br>
                    <Form className="justify-content-center" inline>
                        <FormControl type="text" placeholder="Search a brand here" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Jumbotron>            
        )
    }
}