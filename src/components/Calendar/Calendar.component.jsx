import React from 'react';
import './Calendar.styles.css';
import CalendarItem from '../CalendarItem/CalendarItem.component';

class Calendar extends React.Component {

    constructor() {
        super();

        this.colours = ["orange", "lightblue", "purple", "lightsalmon"];
        this.state = {

        }
    }

    render() {
        return(
            <div className="calendar">
                <h1>Schedule</h1>
                <h3 className="calendarTime">{new Date().toLocaleString() + ""}</h3>
                <div className="calendarContainer">
                    {
                        this.props.tasks.map(task => {
                            return <CalendarItem 
                                time="9:00am"
                                title={task.title}
                                description={task.description}
                                colour="lightsalmon"
                            />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Calendar;