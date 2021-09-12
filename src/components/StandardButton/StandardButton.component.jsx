import React from 'react';
import './StandardButton.styles.css';

const StandardButton = (props) => {
    return(
        <button className="button" onClick={props.onClick} style={{"background": props.colour, "margin-right": "10px"}}>
            {props.buttonText}
        </button>
    );
}

export default StandardButton;