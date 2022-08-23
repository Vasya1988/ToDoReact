import classes from './TaskDone.module.css';
import Delete from '../../ui/buttons/delete/Delete';

const TaskDone = (props) => {
    return (
        <div className={classes.TaskDone}>
            <span>{`${props.taskNumber + 1}. ${props.name}`}</span>
            <Delete 
                removeTask={props.removeTask}
                id={props.id}
            />
        </div>
    )
}

export default TaskDone;