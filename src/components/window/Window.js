import classes from '../window/Window.module.css';

import { Routes, Route, Link } from 'react-router-dom';
import CalendarContainer from '../../containers/calendarContainer/CalendarContainer';
import Task from '../task/Task';
import TaskList from '../taskList/TaskList';

const Window = (props) => {
    return (
        <>
            <div
                className={classes.Window}
            >
                <Link to='/calendar'>Calendar</Link>
                <Link to='/my-page'>Todo</Link>
            </div>
            <Routes>
                <Route path='/my-page' element={<TaskList 
                    addTask={props.addTask}
                    setTask={props.setTask}
                    task={props.task}
                    setTaskList={props.setTaskList}
                    taskList={props.taskList}
                    removeTask={props.removeTask}
                />} />
                <Route path='/calendar' element={<CalendarContainer
                    calendar={props.calendar}
                    day={props.day}
                    changeDate={props.changeDate}
                    allMonth={props.allMonth}
                    month={props.month}
                    year={props.year}
                />} />
            </Routes>
        </>    
    )
}
export default Window;