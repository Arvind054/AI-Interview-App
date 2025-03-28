import React from 'react'
import Navbar from './Navbar'
const Demo = () => {
  return (
    <>
    <Navbar></Navbar>
    <div style={{width:"100vw", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h3 style={{fontSize:"2rem"}}> <span style={{color:"rgb(72,69,210)"}}>Tutorial:</span> Get Started </h3>
       <ul style={{listStyle:"none",display:"flex", flexDirection:"column", justifyContent:"cnter", alignItems:"flex-start", gap:"1rem", fontSize:"1.2rem"}}>
        <li>⭐Uplaod your Resume</li>
        <li>⭐Submit the Job Description and Other Relevant Info</li>
        <li>⭐Click Start to start the Interviw</li>
        <li>⭐Click Save and Next to save and Move to Next Question.</li>
        <li>⭐Click Submit to Submit the answers.</li>
        <li>⭐Analyse your result.</li>
        <li>⭐ Click on Feedback to get The Feedback.</li>
       </ul>
    </div>
    </>
  )
}

export default Demo