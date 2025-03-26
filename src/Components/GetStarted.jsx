import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
const GetStarted = () => {

    const navigator = useNavigate();
    const handelStart= ()=>{
        navigator('/Home');
    }
  return (
    <>
    <Navbar></Navbar>
    <div className='GetStrtedPage'>
         <h2>Your Personal AI Interview Coach</h2>
         <p>Increase your chances of landing that job 🚀 offer with our AI-powered interview prep App</p>
         <button style={{backgroundColor:"rgb(72,69,210)",}} onClick={handelStart}>Get Started</button>

    </div>

    </>
  )
}

export default GetStarted