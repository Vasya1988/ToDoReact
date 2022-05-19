import classes from '../todo/Todo.module.css'

const Todo = (props) => {
    return (
        <h1
            className={classes.Todo}
        >
            Hello, from Todo!
        </h1>
    )
}
export default Todo;