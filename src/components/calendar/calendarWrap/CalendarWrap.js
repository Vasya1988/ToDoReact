import React from 'react';
import classes from '../calendarWrap/CalendarWrap.module.css';
import Tr from './tr/Tr';


const CalendarWrap = (props) => {
    return (
        <table
            className={classes.CalendarWrap}
            >
                <thead></thead>
                <tbody>
                    {props.calendar()}
                </tbody>
              
        </table>
    )
}
export default CalendarWrap;