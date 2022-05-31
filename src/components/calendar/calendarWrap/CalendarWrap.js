import React from 'react';
import classes from '../calendarWrap/CalendarWrap.module.css';
import Td from './td/Td';
import Tr from './td/tr/Tr';

const CalendarWrap = (props) => {
    return (
        <div
            className={classes.CalendarWrap}
        >
            {props.getDate()}
        </div>
    )
}
export default CalendarWrap;