import React from 'react';
import image from '../testImage.svg';

let Company = (props) => {
    return (<figure>
                <img src={image} onClick={props.onClick} alt='company logo'/>
                <figcaption>{props.name}</figcaption>
            </figure>)
}

export default Company;