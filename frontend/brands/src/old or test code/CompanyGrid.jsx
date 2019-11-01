import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../testImage.svg';

export default class CompanyGrid extends Component {
    render() {
        return (
            <>
            <Container>
                <Row className="pb-5 pl-5">
                    <Col>
                    
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="pb-5">
                    <Col>  
                    
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row className="pb-5 pl-5">
                    <Col>
                    
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col xs={3}>
                        <Image src={image} alt='an image' rounded />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}