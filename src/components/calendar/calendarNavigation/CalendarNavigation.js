import classes from '../calendarNavigation/CalendarNavigation.module.css';
import Month from './month/Month';
import BackButon from './backButton/BackButton';
import ForwardButton from './forwardButton/ForwardButton';

const CalendarNavigation =(props) => {
    return (
        <div
            className={classes.CalendarNavigation}
        >
            <BackButon />
            <Month />
            <ForwardButton />
        </div>
    )
}
export default CalendarNavigation;