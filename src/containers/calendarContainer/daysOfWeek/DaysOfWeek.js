import classes from '../daysOfWeek/DaysOfWeek.module.css';

const DaysOfWeek = (props) => {
    return (
        <div 
            className={classes.DaysOfWeek}
        >
            <span>Пн</span>
            <span>Вт</span>
            <span>Ср</span>
            <span>Чт</span>
            <span>Пт</span>
            <span>Сб</span>
            <span>Вс</span>
        </div>
    )
}
export default DaysOfWeek;