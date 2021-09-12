import React from 'react';
import './CalendarItem.styles.css';

const CalendarItem = (props) => {

    return(
        <div className="calendarItem">
            <h1 className="calendarItemTime">{props.time}</h1>
            <div className="calendarItemDivider" style={{"background": props.colour}}></div>
            <div>
                <h1 className="calendarItemTitle">{props.title}</h1>
                <p className="calendarItemDescription">{
                    props.description.length > 15 ? props.description.substr(0, 13)+"..." : props.description
                }</p>
            </div>
        </div>
    );
}

export default CalendarItem;