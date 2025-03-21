import React from 'react'
import { useNavigate } from 'react-router-dom'
const GetStarted = () => {
    const navigator = useNavigate();
    const handelStart= ()=>{
        navigator('/Home');
    }
  return (
    <div>
        <h3>AI 🤖 Interview App</h3>
         <button style={{'background':'blue'}} onClick={handelStart}>Get Started</button>
    </div>
  )
}

export default GetStarted