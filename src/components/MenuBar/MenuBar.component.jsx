import React from 'react';
import './MenuBar.styles.css';
import { IoApps } from 'react-icons/io5'
import { FiChevronDown } from 'react-icons/fi'
 
const MenuBar = () => {
    return(
        <div className="menuBar">
            <ul>
                <IoApps style={{ margin: "0 20px 0 0", cursor: "pointer" }}  color="white" size={50} />
                <li className="active">Home</li>
                <li>About</li>
                <div className="menuBarProfileContainer">
                    <img style={{ width: "40px", borderRadius: "50%" }} src="https://randomuser.me/api/portraits/men/75.jpg"></img>
                    <div style={{ textAlign: "left",marginLeft:"15px" }}>
                        <h4 style={{ fontSize: "20px" }}>Floyd Mayweather</h4>
                        <p style={{ opacity: ".5" }}>Frontend Developer</p>
                    </div>
                    <FiChevronDown style={{ marginLeft: "10px" }} size={20} />
                </div>
            </ul>
        </div>
    );
}

export default MenuBar;