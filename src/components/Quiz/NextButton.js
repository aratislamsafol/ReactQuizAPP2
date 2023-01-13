import { Link } from 'react-router-dom';
import classes from '../assets/css/module/Quiz/nextButton.module.css';
export default function NextButton(){
    return (
        <div className={classes.nextButton}>
            <Link to="">Next</Link>
        </div>
    );
}