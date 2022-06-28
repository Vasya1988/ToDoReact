import classes from '../task/Task.module.css';
import Done from '../../ui/buttons/done/Done';
import Delete from '../../ui/buttons/delete/Delete';


const Task = (props) => {
    return (
        <>
            <div
                className={classes.Task}
            >
                <span className={classes.TaskName}>{`${props.taskNumber + 1}. ${props.name}`}</span>
                <div className={classes.TaskButtons}>
                    <Done />
                    <Delete 
                        removeTask={props.removeTask}
                        id={props.id}
                    />
                </div>
            </div>
            <div>
                <span>15 March 1988</span>
                <input type='date'></input>
                {console.log('dddddddddd')}
            </div>
        </>    
    )
}

export default Task;