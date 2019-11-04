import React, { Component } from 'react';
import './Brand.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class Brand extends Component {
    render() {
        return(
            <Col xs={3} className="justify-content-md-center" onClick={this.props.click}>
                <Figure>
                    <Figure.Image src={this.props.img_url} style={{display: 'block', margin: 'auto'}} roundedCircle/>
                    <Figure.Caption><b>{this.props.name}</b></Figure.Caption>
                </Figure>
            </Col>
        )
    }
}