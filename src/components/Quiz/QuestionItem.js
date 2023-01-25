import classes from '../assets/css/module/Quiz/quiz.module.css';
import Input from "../Input";
import Label from "../Label";

export default function QuestionItem({input,option,handeler,index}){
    return <div className={`${
        option.correct
          ? classes.correct
          : option.checked
          ? classes.wrong
          : null
      } ${classes.item}`} key={index}>
        {input?<>
            
            <Input key={index} value={index} class="form-check-input me-2"  type="checkbox" checked={option.checked} onChange={(e)=>handeler(e,index)}/>
       
            <Label title={option.title} style={{color:'bule'}}  labelClass="form-check-label"></Label>
        </>:<>
            <Input key={index} className="form-check-input me-2" type="checkbox" defaultChecked={option.checked} disabled/>
            <Label title={option.title} labelClass="form-check-label" ></Label>
        </>}
    </div>
}