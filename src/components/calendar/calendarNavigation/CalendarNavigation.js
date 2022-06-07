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
            <span className={classes.Month}>
                {
                    props.allMonth.filter((e, index) => {
                        if (index === props.month) {
                            return e
                        }
                    })
                }
                {` ${props.year}`}

            </span>
            <button
                className={classes.ForwardButton}
                data-button='forward'
                onClick={(e) => {
                    props.changeDate(e.target.dataset.button)
                }}
            ></button>
        </div>
    )
}
export default CalendarNavigation;