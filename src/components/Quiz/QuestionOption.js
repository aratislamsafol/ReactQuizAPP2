import QuestionItem from "./QuestionItem";
import classes from '../assets/css/module/Quiz/quiz.module.css';
export default function QuestionOption({classes}){
    return <div className={classes}>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
    </div>
}