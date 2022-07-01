import classes from '../task/Task.module.css';
import Done from '../../ui/buttons/done/Done';
import Delete from '../../ui/buttons/delete/Delete';
import Edit from '../../ui/buttons/edit/Edit';


const Task = (props) => {
    return (
        <>
            <div
                className={classes.Task}
            >
                <div className={classes.TaskEdit}>
                    <span>12.06.2022</span>
                    <div className={classes.TaskButtons}>
                        <Edit />
                        <Delete 
                            removeTask={props.removeTask}
                            id={props.id}
                        />
                        <Done />
                    </div>
                    
                </div>
                <h3 className={classes.TaskName}>{`${props.taskNumber + 1}. ${props.name}`}</h3>
            </div>
        </>    
    )
}

export default Task;