import React from 'react'
import ReactMarkdown from "react-markdown";
import Navbar from './Navbar';
import { InterviewData } from '../Context/InterviewContext';
const Feedack = () => {
    const {interviewFeedbackRef} = InterviewData();
  return (
    <>
    <Navbar></Navbar>
    <div className='Feedback'>
        <h2><span style={{color:"rgb(72,69,210)"}}>Feedback</span> Based On your Responses </h2>
        <div>
           <ReactMarkdown>{interviewFeedbackRef.current}</ReactMarkdown>
        </div>
    </div>
    </>
  )
}

export default Feedack