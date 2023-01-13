import Navbars from '../Navbar';
import QuizBody from '../Quiz/QuizBody';
import QuizFooter from '../Quiz/QuizFooter';
export default function Quiz(){
    return (
        <div class="mt-5 pt-5">
            <Navbars/>
            <QuizBody/>
            <QuizFooter/>
        </div>
    );
}