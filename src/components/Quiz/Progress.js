import classes from '../assets/css/module/Quiz/quiz.module.css';
import ProgressBar from './ProgressBar';
import { useContext } from 'react';
import { context } from '../pages/Quiz';

export default function Progress({progressClass,percent, ...rest}){
    const contextCreate = useContext(context);
    return (
        <div className={classes.progress}>
           <ProgressBar progress_bar={`${classes.progressA}`} precent={`${contextCreate.complete}%`} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:`${contextCreate.complete}%`, backgroundColor:'rgb(255, 115, 0)'}} />
        </div>
    );
}