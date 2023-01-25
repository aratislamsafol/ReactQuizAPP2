import { getDatabase, ref, set } from 'firebase/database';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import QuizHook from '../hooks/QuizHook';
import Navbars from '../Navbar';
import QuizFooter from '../Quiz/QuizFooter';
import _ from 'lodash';
import QuizBody from '../Quiz/QuizBody';

const initialState=null;

const reducer=(state,action)=>{
    switch(action.type){
        case "questions":
            action.value.forEach((question)=>{
                question.options.forEach((option)=>{
                    option.checked=false;
                });
            });
            return action.value;
        case "answers":
            const questions=_.cloneDeep(state); 
            questions[action.questionId].options[action.optionIndex].checked=action.value;
            return questions;

        default:
            return state;    
    }
}

export const context=React.createContext();

export default function Quiz(){
    const {id}=useParams();
    const { loading,error,question}=QuizHook(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [qna,dispatch]=useReducer(reducer,initialState);
    const navigate=useNavigate();
    const {currentUser}=useAuth();

    useEffect(()=>{
        dispatch({
            type:"questions",
            value:question
        });
    },[question])

    function handeler(e,index){
        dispatch({
            type:"answers",
            questionId:currentQuestion,
            optionIndex:index,
            value:e.target.checked,
        });
    }

    function nextQuestion(){
        if(currentQuestion+1<question.length){
            setCurrentQuestion((prevQuestions)=>prevQuestions+1);
        }
    }
    
    function prevQuestion() {
        if (currentQuestion >= 1 && currentQuestion <= question.length) {
          setCurrentQuestion((prevCurrent) => prevCurrent - 1);
        }
      }

    async function submit(){
        const {uid}=currentUser;
        const db=getDatabase();
        const resultRef=ref(db,`result/${uid}`);

        await set(resultRef,{
            [id]:qna
        });

        navigate(`/result/${id}`,{
            state:{
                qna
            }
        })
    }
      
    const complete=question.length>0?((currentQuestion+1)/question.length)*100:0;

    

    return (
        <div class="mt-5 pt-5">
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && qna && qna.length>0 && (
                <>
                    <Navbars/>
                    <context.Provider value={{id:id}}>
                        <QuizBody title={qna[currentQuestion].title} handeler={handeler} options={qna[currentQuestion].options} input={true}/>
                    </context.Provider>

                    <context.Provider value={{complete:complete,next:nextQuestion,prev:prevQuestion,submit:submit}}>
                        <QuizFooter />
                    </context.Provider>
                    
                </>
                
            )}
        </div>
    );
}