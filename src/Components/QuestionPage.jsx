import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { InterviewData } from '../Context/InterviewContext'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
const QuestionPage = () => {
    const navigator = useNavigate();
    const {questionsRef, resultRef, Evaluate} = InterviewData();
    const Questions = questionsRef.current;
    const {id} = useParams();
    let questionNumber = parseInt(id, 10);
    const [answer, setAnswer] = useState("");
    const handelNext = ()=>{
        const key = `Question${questionNumber}: ${Questions[questionNumber-1]}`;
        const value = `Answer${questionNumber}: ${answer}`
        resultRef.current = { ...resultRef.current, [key]: value};
        setAnswer("");
        navigator(`/interview/question/${questionNumber+1}`)
    }
    const handleSubmit = ()=>{
       Evaluate(navigator);
    }
  return (
    <>
    <div className="Test">
    <div className= "Question" >Question: {Questions[questionNumber-1]} </div>
    <div className="userAnswer">
        <textarea name="" id="" placeholder='Write Your Answer Here !!' onChange={(e)=>setAnswer(e.target.value)}></textarea>
    {id == Questions.length && <Button onClick={handleSubmit}>Sumbit</Button>}
    {id != Questions.length && <Button onClick={handelNext}>Save &Next</Button>}
    </div>
    </div>
    </> 
  )
}

export default QuestionPage