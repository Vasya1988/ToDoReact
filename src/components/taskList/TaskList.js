import classes from './TaskList.module.css';

import App from '../../App';
import Task from '../task/Task';
import { useEffect } from 'react';

const TaskList = (props) => {

    return (
        <div className={classes.TaskList}>
            <form>
                <input 
                    className={classes.EnterTask} 
                    type='text'
                    value={props.task}
                    onChange={(event) => {
                        props.setTask(event.target.value)
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
            <h3 className={classes.TaskTitle}>You have 32 tasks</h3>

            {
                props.taskList.map((task, id) => {
                    return <Task 
                        key={id} 
                        name={task.name} 
                        id={task.id}
                        removeTask={props.removeTask}
                    />
                })
            }
            
        </div>
    )
}
export default TaskList;