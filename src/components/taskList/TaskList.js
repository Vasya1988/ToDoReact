import classes from './TaskList.module.css';

import App from '../../App';
import Task from '../task/Task';
import { useEffect } from 'react';

const TaskList = (props) => {

    const checkTask = () => {
        if (props.taskList.length === 0) {
            return `You have ${props.taskList.length} tasks`
        } else if (props.taskList.length === 1) {
            return `You have ${props.taskList.length} task`
        } else {
            return `You have ${props.taskList.length} tasks`
        }
    }

    return (
        <div className={classes.TaskList}>
            <h2>Enter task</h2>
            <form>
                <input 
                    className={classes.EnterTask} 
                    type='text'
                    value={props.task}
                    placeholder='Enter your task...'
                    onChange={(event) => {
                        props.setTask(event.target.value)
                    }}
                
                ></input>
                <input 
                    className={classes.DateTask}         type='date'
                    onChange={(getDate) => {
                        props.getDate(getDate.target.value)
                    }}
                ></input>
                <button 
                    className={classes.AddButton}
                    onClick={(click) => {
                        click.preventDefault();
                        props.addTask(props.task)
                    }}
                
                >Add</button>
                
                
            </form>
            <h2 className={classes.TaskTitle}>{checkTask()}</h2>

            {
                props.taskList.map((task, id) => {
                    return <Task 
                        key={id} 
                        name={task.name} 
                        id={task.id}
                        removeTask={props.removeTask}
                        taskNumber={id}
                    />
                })
            }
            
        </div>
    )
}
export default TaskList;