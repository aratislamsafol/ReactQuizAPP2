import _ from "lodash";
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import classes from '../assets/css/module/Success/result.module.css';
import img from '../assets/images/others/success.webp';
import Container from "../Container";
import AnswerResult from '../hooks/AnswerResult';
import Image from '../Image';
import CorrectAnswer from './correctAnswer';
import Mark from "./Mark";

export default function Result(){
    const {state}=useLocation();
    const {qna}=state;
    const {id}=useParams();
    const {loading,error,answers,}=AnswerResult(id);

    function calculate(){
        let score=0;
        answers.forEach((questions,index1)=>{
            const correctIndex=[];
            const checkedIndex=[];

            questions.options.forEach((option,index2)=>{
                if(option.correct) correctIndex.push(index2);
                if(qna[index1].options[index2].checked){
                    checkedIndex.push(index2);
                    option.checked=true;
                }
            });
            if (_.isEqual(checkedIndex, correctIndex)) {
                score = score + 5;
              }
        });

        return score;
    }

    const userScore=calculate();

    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There Was An Error</div>}
            {answers && answers.length > 0 && (
            <Container classes="container">
                <div className={classes.success}>
                    <Mark score={userScore} answer={answers.length}/>
                    <div className={`${classes.image}`}>
                        <Image src={img} banner_img="img-fluid"/>
                    </div>
                </div>   
                <CorrectAnswer answer={answers} id={id}/>
            </Container>
            )}
        </>
    );
}