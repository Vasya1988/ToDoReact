import classes from '../calendarContainer/CalendarContainer.module.css';
import CalendarNavigation from '../../components/calendar/calendarNavigation/CalendarNavigation';
import CalendarWrap from '../../components/calendar/calendarWrap/CalendarWrap';
import DaysOfWeek from './daysOfWeek/DaysOfWeek';

const CalendarContainer = (props) => {
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
            />
        </div>
    )
}
export default CalendarContainer;