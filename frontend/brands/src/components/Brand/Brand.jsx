import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import './Brand.css'

export default class Brand extends Component {
    render() {
        return(
                    <Col xs={6} md={4}>
                    <Image src={this.props.img_url} rounded-circle />
                    <p><b>{this.props.name}</b></p>
                    </Col>
        )
    }
}