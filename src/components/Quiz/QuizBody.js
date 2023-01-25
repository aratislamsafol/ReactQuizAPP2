import Container from '../Container';
import Question from './Question';
import QuestionOption from './QuestionOption';
import classes from '../assets/css/module/Quiz/quiz.module.css';

export default function QuizBody({title,options,handeler,input}){
    return <Container classes="mt-3 container">
    <Question question={title}/>
    <QuestionOption classes={`${classes.questions} mt-3`} options={options} input={input} handeler={handeler} />
</Container>
}

