import React from 'react';
import classes from '../calendarWrap/CalendarWrap.module.css';



const CalendarWrap = (props) => {
    return (
        <table
            className={classes.CalendarWrap}
            >
                <thead></thead>
                <tbody>
                    {props.calendar(props.isDate)}
                </tbody>
              
        </table>
    )
}
export default CalendarWrap;