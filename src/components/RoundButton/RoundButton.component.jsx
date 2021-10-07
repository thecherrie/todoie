import React from 'react';
import './RoundButton.styles.css';
import { FaCheck } from 'react-icons/fa';

const RoundButton = (props) => {
    return(
        <div>
            <button onClick={props.onClick} style={{"background": props.backgroundColor}} className={"circleBtn "+props.fadeInClass}>
                <h2><FaCheck  size={10} /></h2>
            </button>
        </div>
    );
}

export default RoundButton;