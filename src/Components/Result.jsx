import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InterviewData } from '../Context/InterviewContext';

import Navbar from './Navbar.jsx'
const Result = () => {
  const navigator = useNavigate();
  const { InterviewResult, GetFeedback, Loading } = InterviewData();

  return (
    <>
      <Navbar></Navbar>
      <div className='resultPage'>
        <h2> <span style={{ "color": "rgb(72,69,210)" }}>Interview Completed 🎉 </span>, Your Scored:</h2>
        <h3 >{InterviewResult.current} /100 points</h3>
        <br></br>
        <div style={{ display: "flex", gap: "5rem" }}>
          <button onClick={() => GetFeedback(navigator)} style={{ backgroundColor: "rgb(72,69,210)" }} disabled={Loading}>{Loading ? "Loading..." : "Get Feedback"}</button>
          <button onClick={() => { navigator("/") }} style={{ backgroundColor: "red" }}>Main Menu</button>
        </div>
      </div>
    </>
  )
}

export default Result