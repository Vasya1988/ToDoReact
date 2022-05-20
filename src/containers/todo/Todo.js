import classes from '../todo/Todo.module.css';
import Delete from '../../ui/buttons/delete/Delete';

const Todo = (props) => {
    return (
        <h1
            className={classes.Todo}
        >
            <Delete />
            Hello, from Todo!
        </h1>
    )
}
export default Todo;