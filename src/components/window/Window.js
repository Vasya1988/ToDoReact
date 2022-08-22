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
                    createId={props.createId}
                    getDate={props.getDate}
                    colorDate={props.colorDate}
                    changeTaskStatus={props.changeTaskStatus}
                    taskDone={props.taskDone}
                />} />
                <Route path='/calendar' element={<CalendarContainer
                    calendar={props.calendar}
                    day={props.day}
                    changeDate={props.changeDate}
                    allMonth={props.allMonth}
                    month={props.month}
                    year={props.year}
                    taskList={props.taskList}
                    dayTask={props.dayTask}
                    getDay={props.getDay}
                    flag={props.flag}
                    setFlag={props.setFlag}
                    removeTask={props.removeTask}
                    changeTaskStatus={props.changeTaskStatus}
                    taskDone={props.taskDone}
                />} />
            </Routes>

            {
                props.taskDone.map((e, id) => {
                    return (
                        <div>
                            <h1>Done</h1>
                            <Task 
                                key={e.id}
                                name={e.name}
                                taskNumber={id}
                                removeTask={props.removeTask}
                            />
                        </div>
                    )
                })
            }
        </>    
    )
}
export default Window;