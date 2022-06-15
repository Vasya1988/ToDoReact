import classes from './TaskList.module.css';

import Task from '../task/Task';
const TaskList = () => {

    return (
        <div className={classes.TaskList}>
            <Task />
        </div>
    )
}
export default TaskList;