import React, { useState } from 'react';
import './Task.styles.css';
import RoundButton from '../RoundButton/RoundButton.component';
import StandardButton from '../StandardButton/StandardButton.component';
import { FaCheck } from 'react-icons/fa';


const Task = (props) => {

    const [fade, setFade] = useState("")

    return(
        <div onMouseOver={() => setFade("makeVisible")} onMouseLeave={() => setFade("")}>
            <div className="task">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
                {/* <RoundButton onClick={()=>props.onRemoveBtnClick(props.id)} fadeInClass={fade} backgroundColor="rgba(255, 255, 255, 0.8)" /> */}
                <div className="taskTagsContainer">
                    {
                        props.tags.map(tag => {
                            return <div className="taskTag">{tag}</div>
                        })
                    }
                </div>
                <button className="taskCompleteButton" onClick={()=>props.onRemoveBtnClick(props.id)} style={{ background: "#45db5f", marginTop: "10px" }}>Completed <FaCheck id="tickIcon"/></button>
            </div>
        </div>
    );
}

export default Task;