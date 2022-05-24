import classes from '../todo/Todo.module.css';
import Delete from '../../ui/buttons/delete/Delete';
import Done from '../../ui/buttons/done/Done';
import Task from '../../components/task/Task';

const Todo = (props) => {
    return (
        <div
            className={classes.Todo}
        >
            Hello, from Todo!
            <Task />
        </div>
    )
}
export default Todo;