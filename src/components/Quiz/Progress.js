import classes from '../assets/css/module/Quiz/quiz.module.css';
import ProgressBar from './ProgressBar';
export default function Progress({progressClass,percent, ...rest}){
    return (
        <div className={classes.progress}>
           <ProgressBar progress_bar={`${classes.progressA}`} precent="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:'25%', backgroundColor:'rgb(255, 115, 0)'}} />
        </div>
    );
}