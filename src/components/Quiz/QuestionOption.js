import { Fragment } from 'react';
import classes from '../assets/css/module/Quiz/quiz.module.css';
import QuestionItem from "./QuestionItem";

export default function QuestionOption({input,options,handeler,answers=[]}){
    return (
        <div className={classes.questions}>
            {options.map((option,index)=>
            <Fragment key={index}>
                <QuestionItem option={option} index={index} handeler={handeler} input={input}/>
            </Fragment>
                
            )}  
        </div>
    );
}