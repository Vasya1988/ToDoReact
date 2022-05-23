import classes from '../todo/Todo.module.css';
import Delete from '../../ui/buttons/delete/Delete';
import Done from '../../ui/buttons/done/Done';

const Todo = (props) => {
    return (
        <h1
            className={classes.Todo}
        >
            <Done />
            <Delete />
            Hello, from Todo!
        </h1>
    )
}
export default Todo;