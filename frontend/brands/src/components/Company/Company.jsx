import React from 'react';
import image from '../../testImage.svg';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

let Company = (props) => {
    return (
        <Col xs={3} className="justify-content-md-center">
            <Figure>
                <Figure.Image onClick={props.onClick} alt='company logo' src={image} style={{display: 'block', margin: 'auto'}} roundedCircle/>
                <Figure.Caption><b>{props.name}</b></Figure.Caption>
            </Figure>
        </Col>
    ) 
}

export default Company;
