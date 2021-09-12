import React from 'react';
import './RoundButton.styles.css';
import { TiTick } from 'react-icons/ti';

const RoundButton = (props) => {
    return(
        <div>
            <button onClick={props.onClick} style={{"background": props.backgroundColor}} className={"circleBtn "+props.fadeInClass}>
                <h2><TiTick /></h2>
            </button>
        </div>
    );
}

export default RoundButton;