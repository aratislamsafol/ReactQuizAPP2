import Container from '../Container';
import Question from './Question';
import QuestionOption from './QuestionOption';
import classes from '../assets/css/module/Quiz/quiz.module.css';
export default function QuizBody(){
    return <Container classes="mt-3 container">
        <Question question="Contrary to popular belief, Lorem Ipsum is not simply random text"/>
        <QuestionOption classes={`${classes.questions} mt-3`}/>
    </Container>
}