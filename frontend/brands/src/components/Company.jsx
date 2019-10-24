import React from 'react';

let Company = (props) => {
    return (<div>
                <button onClick={props.onClick}>
                    {props.name}
                </button>
            </div>)
}

export default Company;