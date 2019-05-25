import React from 'react';
import * as El from './../css/Button'

const Button = ({text, mFunction}) => {
    return (
        <El.Button onClick = {mFunction}>
            {text}
        </El.Button>
    );
}
export default Button;
