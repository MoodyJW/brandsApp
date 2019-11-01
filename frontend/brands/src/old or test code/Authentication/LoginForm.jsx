import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

// document.cookie for token
// document.cookie.match(/csrftoken=([A-Za-z0-9]+)/)
// (async () => {
// 	let resp = await fetch("/users/2/", {
// 		method: "PUT",
// 		body: JSON.stringify({email: "hax0rz@none.com", username: 'user1', password: 'password'}),
// 		headers: {'X-CSRFTOKEN': token, 'Content-Type': 'application/json'}
// 	});
// 	let data = await resp.json();
// 	console.log("data:", data)
// })() 

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          username: '',
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

        // async handleSubmit() {
        //     let resp = await fetch("/users/1", {
        //         		method: "PUT",
        //         		body: JSON.stringify({username: 'user1', password: 'password'}),
        //         		headers: {'X-CSRFTOKEN': document.cookie.match(/csrftoken=([A-Za-z0-9]+)/)[1], 'Content-Type': 'application/json'}
        //         	});
        //         	let data = await resp.json();
        //         	console.log("data:", data)
        //         }

    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/users/')
    //     .then(response => {
    //         const users = response.data
    //         this.setState({ users: users })
    //         console.log ('USERS:', users)
    //     })
    //     this.refs.username.focus();
    // }
  
    // handleSubmit() {
    //     this.setState({
    //         username: this.refs.username.value
    //     });
    // }
  
    render() {
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
                                    // value={this.state.username} 
                                    onSubmit={this.handleSubmit}
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