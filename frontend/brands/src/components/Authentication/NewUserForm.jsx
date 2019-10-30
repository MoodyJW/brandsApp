import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class NewUserForm extends Component {
    render() {
        return (
            <Jumbotron>
            <Container className="justify-content-center">
                <Row>
                    <Col></Col>
                    <Col xs={4}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                                <Form.Text className="text-muted">
                                We'll never give your email address to anyone.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter a username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter a password" />
                                <Form.Label>Verify Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter the password again" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Keep me signed in" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <br></br>
                        <a href='#'>Click here if you already have an account</a>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </Jumbotron>
        )
    }
}