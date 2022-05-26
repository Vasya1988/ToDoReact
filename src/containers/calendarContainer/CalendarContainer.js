import classes from '../calendarContainer/CalendarContainer.module.css';
import CalendarNavigation from '../../components/calendar/calendarNavigation/CalendarNavigation';
import CalendarWrap from '../../components/calendar/calendarWrap/CalendarWrap';

const CalendarContainer = (props) => {
    return (
        <div
            className={classes.CalendarContainer}
        >
            <CalendarNavigation />
            <CalendarWrap />
        </div>
    )
}
export default CalendarContainer;