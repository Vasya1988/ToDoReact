import classes from '../todo/Todo.module.css';
import CalendarContainer from '../calendarContainer/CalendarContainer';
import Window from '../../components/window/Window';

const Todo = (props) => {
    return (
        <div
            className={classes.Todo}
        >
            <h3>Welcome to my Todo-react-app</h3>
            <Window  
                calendar={props.calendar}
                day={props.day}
                changeDate={props.changeDate}
                allMonth={props.allMonth}
                month={props.month}
                year={props.year}
                addTask={props.addTask}
                setTask={props.setTask}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
                task={props.task}
                removeTask={props.removeTask}
                createId={props.createId}
                getDate={props.getDate}
            />
            
            {/* <CalendarContainer 
                calendar={props.calendar}
                day={props.day}
                changeDate={props.changeDate}
                allMonth={props.allMonth}
                month={props.month}
                year={props.year}
            /> */}


        </div>
    )
}
export default Todo;