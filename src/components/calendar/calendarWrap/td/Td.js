import classes from '../td/Td.module.css';
import Tr from './tr/Tr';

const Td = (props) => {
    return (
        <td
            className={classes.Td}
        >{props.day}</td>
    )
}
export default Td;
