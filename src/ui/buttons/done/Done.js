import classes from '../done/Done.module.css';

const Done = (props) => {
    return (
        <button
            className={classes.Done}
            onClick={(e) => {
                e.preventDefault();
                console.log(props.id)
                props.changeTaskStatus(props.id)
            }}
        >
            Done
        </button>
    )
}
export default Done;