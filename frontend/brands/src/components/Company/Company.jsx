import React, { Component } from 'react';
import './Company.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class Company extends Component {
    render() {
        return(
                    <Col xs={6} md={4} onClick={this.props.click}>
                        <Figure>
                            <Figure.Image src={this.props.img_url} roundedCircle/>
                            <Figure.Caption><b>{this.props.name}</b></Figure.Caption>
                        </Figure>
                    </Col>
        )
    }
}