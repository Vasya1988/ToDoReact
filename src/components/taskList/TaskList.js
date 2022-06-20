import classes from './TaskList.module.css';

import Task from '../task/Task';
const TaskList = () => {

    return (
        <div className={classes.TaskList}>
            <form>
                <input className={classes.EnterTask} type='text'></input>
                <button className={classes.AddButton}>Add</button>
            </form>
            <h3 className={classes.TaskTitle}>You have 32 tasks</h3>
            <Task />
        </div>
    )
}
export default TaskList;