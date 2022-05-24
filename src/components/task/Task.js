import classes from '../task/Task.module.css';
import Done from '../../ui/buttons/done/Done';
import Delete from '../../ui/buttons/delete/Delete';
import TaskName from './taskName/TaskName';

const Task = () => {
    return (
        <div
            className={classes.Task}
        >
            <TaskName />
            <div
                className={classes.TaskButtons}
            >
                <Done />
                <Delete />
            </div>
        </div>
    )
}

export default Task;