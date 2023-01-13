import classes from '../assets/css/module/Quiz/quiz.module.css';
import Container from '../Container';
import MiniPlayer from './MiniPlayer';
import NextButton from './NextButton';
import Progress from './Progress';
export default function QuizFooter(){
    return(
        <Container classes="container"> 
            <div className={classes.footer}>
                <Progress/>
                <NextButton />
                <MiniPlayer/>
            </div>      
        </Container>
    );
}