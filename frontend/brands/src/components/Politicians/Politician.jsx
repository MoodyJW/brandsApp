import React, { Component } from 'react';
import image from '../../testImage.svg';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class Politician extends Component {
    render() {
        return (
            <Col xs={3} className="justify-content-md-center">
                <Figure>
                    <Figure.Image src={image} style={{display: 'block', margin: 'auto'}} roundedCircle/>
                    <Figure.Caption><b>{this.props.name}, {this.props.state} - {this.props.party}</b></Figure.Caption>
                </Figure>
            </Col>
        )
    }
}