import Label from "../Label"
import classes from '../assets/css/module/Quiz/quiz.module.css';
import Input from "../Input";
export default function QuestionItem(){
    return <div className={classes.item}>
         <Input class="form-check-input me-2" type="checkbox" value=""/>

        <Label title="New Question1" labelClass="form-check-label"></Label>
    
    </div>
}