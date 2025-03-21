import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InterviewData } from '../Context/InterviewContext';
const Result = () => {
    const navigator = useNavigate();
    const {InterviewResult} = InterviewData();
  return (
    <>
    <div>{InterviewResult.current}</div>
     <button onClick={()=>{navigator("/")}}>Main Menu</button>
    </>
  )
}

export default Result