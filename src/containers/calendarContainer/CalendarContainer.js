import classes from '../calendarContainer/CalendarContainer.module.css';
import CalendarNavigation from '../../components/calendar/calendarNavigation/CalendarNavigation';
import CalendarWrap from '../../components/calendar/calendarWrap/CalendarWrap';
import DaysOfWeek from './daysOfWeek/DaysOfWeek';
import Task from '../../components/task/Task'
import { useState } from 'react';

const CalendarContainer = (props) => {
    
    const [currentDay, setCurrentDay] = useState();

    // console.log('here --> ', props.month + 1, props.year)
    // console.log('here --> ', props.getDay)

    return (
        <div
            className={classes.CalendarContainer}
        >
            <CalendarNavigation 
                changeDate={props.changeDate}
                allMonth={props.allMonth}
                month={props.month}
                year={props.year}
                setFlag={props.setFlag}
            />
            <DaysOfWeek />
            <CalendarWrap 
                day={props.day}
                calendar={props.calendar}
                // setCurrentDay={setCurrentDay}
            />
            
            {
                props.taskList.map((e, id) => {
                    //if (props.flag === true) {
                        if (props.month + 1 === Number(e.date.month) && props.year === Number(e.date.year) && props.getDay === Number(e.date.day)) {
                            return <Task key={id} name={e.name} taskNumber={id} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus} id={e.id}/>
                        }
                    //} else {
                    //    return false
                    //}
                    
                    
                })
            }

            {
                
            }
        </div>
    )
}
export default CalendarContainer;