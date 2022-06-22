import classes from '../delete/Delete.module.css'

const Delete =(props) => {
    return (
        <button
            className={classes.Delete}
            onClick={(e) => {
                e.preventDefault();
                props.removeTask(props.id)
            }}
        >
            Delete
        </button>
    )
}

export default Delete;