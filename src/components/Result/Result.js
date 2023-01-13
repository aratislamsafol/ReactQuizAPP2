import classes from '../assets/css/module/Success/result.module.css';
import img from '../assets/images/others/success.webp';
import Container from "../Container";
import Image from '../Image';
import CorrectAnswer from './correctAnswer';
import Mark from "./Mark";
export default function Result(){
    return (
        <Container classes="container">
            <div className={classes.success}>
                <Mark/>
                <div className={`${classes.image}`}>
                    <Image src={img} banner_img="img-fluid"/>
                </div>
            </div>   
             <CorrectAnswer/>
        </Container>
    );
}