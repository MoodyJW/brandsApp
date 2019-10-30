import React, { Component } from 'react';
import axios from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: '',
          username: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/users/')
        .then(response => {
            const users = response.data
            this.setState({ users: users })
            console.log ('USERS:', users)
        })
        this.refs.username.focus();
    }
  
    handleChange() {
        this.setState({
            username: this.refs.username.value
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
            <Container className="justify-content-center">
                <Row>
                    <Col></Col>
                    <Col xs={4}>
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="username" 
                                    placeholder="Enter username"
                                    ref="username" 
                                />
                                <Form.Text className="text-muted">
                                We'll never give your email address to anyone.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Keep me signed in" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <br></br>
                        <a href='#'>Click here to create a new account</a>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </Jumbotron>
        )
    }
}