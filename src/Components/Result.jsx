import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InterviewData } from '../Context/InterviewContext';
import ReactMarkdown from "react-markdown";
const Result = () => {
    const navigator = useNavigate();
    const {InterviewResult} = InterviewData();
  return (
    <div className='resultPage'>
    <h2> <span style={{"color":"green"}}>Interview Completed </span>, Check the Result Below</h2>
    <div className='feedback'> <ReactMarkdown>{InterviewResult.current}</ReactMarkdown></div>
     <button onClick={()=>{navigator("/")}} style={{backgroundColor:"red"}}>Main Menu</button>
     </div>
    
  )
}

export default Result