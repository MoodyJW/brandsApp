import React from 'react';

let Brand = (props) => {
    return (<div>
                {props.url}
                {props.name}
                {props.company}
                {props.id}
            </div>)
}

export default Brand;