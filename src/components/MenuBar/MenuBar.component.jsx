import React from 'react';
import './MenuBar.styles.css';
import { IoApps } from 'react-icons/io5'
 
const MenuBar = () => {
    return(
        <div className="menuBar">
            <ul>
                <IoApps style={{ margin: "10px 20px", cursor: "pointer" }}  color="white" size={50} />
                <li className="active">Home</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default MenuBar;