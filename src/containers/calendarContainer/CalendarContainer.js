import classes from '../calendarContainer/CalendarContainer.module.css';
import CalendarNavigation from '../../components/calendar/calendarNavigation/CalendarNavigation';
import CalendarWrap from '../../components/calendar/calendarWrap/CalendarWrap';
import DaysOfWeek from './daysOfWeek/DaysOfWeek';
import Task from '../../components/task/Task'
import { useState } from 'react';

const CalendarContainer = (props) => {
    
    const [currentDay, setCurrentDay] = useState();

    console.log('here --> ', props.month + 1, props.year, props.day)

    return (
        <div
            className={classes.CalendarContainer}
        >
            <CalendarNavigation 
                changeDate={props.changeDate}
                allMonth={props.allMonth}
                month={props.month}
                year={props.year}
            />
            <DaysOfWeek />
            <CalendarWrap 
                day={props.day}
                calendar={props.calendar}
                // setCurrentDay={setCurrentDay}
            />
            
            {/* {
                props.taskList.map((e, id) => {
                    console.log(e)
                    if (props.month + 1 === Number(e.date.month) && props.year === Number(e.date.year)) {
                        return <Task key={id} name={e.name} taskNumber={id} removeTask={props.removeTask}/>
                    }
                    
                })
            } */}
        </div>
    )
}
export default CalendarContainer;