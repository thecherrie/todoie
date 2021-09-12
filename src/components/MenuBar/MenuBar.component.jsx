import React from 'react';
import './MenuBar.styles.css';

const MenuBar = () => {
    return(
        <div className="menuBar">
            <ul>
                <li className="active">Home</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default MenuBar;