import QuizBody from '../Quiz/QuizBody';
import {BsQuestionCircleFill} from 'react-icons/bs';
import { Fragment } from 'react';

export default function CorrectAnswer({answer=[],id}){
    return (
        <>
            <h5><span class="material-symbols-outlined margin"><BsQuestionCircleFill className='text-success'/></span>&nbsp;Here Goes to Questions </h5>
            <Fragment>
                {answer.map((ans)=>(
                    <QuizBody input={false} id={id} options={ans.options} title={ans.title}/>
                ))}
            </Fragment>
            
            
        </>
    );
}