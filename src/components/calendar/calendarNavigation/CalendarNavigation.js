import classes from '../calendarNavigation/CalendarNavigation.module.css';

const CalendarNavigation =(props) => {
    return (
        <div
            className={classes.CalendarNavigation}
        >
            <button
                className={classes.BackButton}
                data-button='back'
                onClick={(e) => {
                    props.changeDate(e.target.dataset.button)
                }}
            ></button>
            <span className={classes.Month}>gf</span>
            <button
                className={classes.ForwardButton}
            ></button>
        </div>
    )
}
export default CalendarNavigation;