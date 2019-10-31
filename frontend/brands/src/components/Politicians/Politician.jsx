import React, { Component } from 'react';
import image from '../../testImage.svg';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class Politician extends Component {
    render() {
        return (
            <Col xs={6} md={4}>
                <Figure>
                    <Figure.Image src={image} roundedCircle/>
                    <Figure.Caption><b>{this.props.name}, {this.props.state} - {this.props.party}</b></Figure.Caption>
                </Figure>
            </Col>
        )
    }
}