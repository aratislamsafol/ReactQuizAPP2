import Question from '../Quiz/Question';
import QuizBody from '../Quiz/QuizBody';
import {BsQuestionCircleFill} from 'react-icons/bs';
export default function CorrectAnswer(){
    return (
        <>
            <h5><span class="material-symbols-outlined margin"><BsQuestionCircleFill className='text-success'/></span>&nbsp;Here Goes to Questions </h5>
            <QuizBody/>
        </>
    );
}