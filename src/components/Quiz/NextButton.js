// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from '../assets/css/module/Quiz/nextButton.module.css';
import { context } from '.././pages/Quiz';
import Button from '../Button';

export default function NextButton(){
    // button next provide prevQuestion, nextQuestion , Submit 
    const buttonNext= useContext(context);
    return (
        <div className={`${classes.nextButton} d-flex gap-1`}>
            <Button type="button" onClick={buttonNext.prev}>Prev</Button>
            <Button type="button" onClick={buttonNext.complete===100?buttonNext.submit:buttonNext.next}>{buttonNext.complete===100?"Submit":"Next"}</Button>
        </div>
    );
}