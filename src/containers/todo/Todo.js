import classes from '../todo/Todo.module.css';
import Task from '../../components/task/Task';

import CalendarContainer from '../calendarContainer/CalendarContainer'

const Todo = (props) => {
    return (
        <div
            className={classes.Todo}
        >
            Hello, from Todo!
            <Task />
            <CalendarContainer 
                calendar={props.calendar}
                day={props.day}
                changeDate={props.changeDate}
                allMonth={props.allMonth}
                month={props.month}
                year={props.year}
            />


        </div>
    )
}
export default Todo;