import React, { Component } from 'react';
import './Brand.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class Brand extends Component {
    render() {
        return(
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image src={this.props.img_url} roundedCircle/>
                            <Figure.Caption><b>{this.props.name}</b></Figure.Caption>
                        </Figure>
                    </Col>
        )
    }
}