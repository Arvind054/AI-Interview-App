import React from 'react'
import Navbar from './Navbar'
import FeedbackForm from './FeedbackForm'
const About = () => {

  return (
    <>
      <Navbar></Navbar>
      <div style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4.5rem" }}>
        <h2 style={{ color: "rgb(72,69,210)" }}>Hello, 👋</h2>
        <p style={{ width: "50vw", fontSize: "1.1rem", textAlign: "start" }}>
          I am <span style={{ color: "rgb(72,69,210)", fontWeight: "600" }}>Arvind Choudhary</span>, second-year undergraduate student at IIIT Trichy.
          Being passionate about AI, I have built several projects implementing AI.
          But this is one of my biggest projects! 🎯
          I created this to help individuals who have a fear of interviews.
          I know it’s not fully complete yet, but with your support, we can make it even more powerful! 🚀
          Your feedback is valuable to us. 💡✨
        </p>
          <FeedbackForm></FeedbackForm>
      </div>
    </>
  )
}

export default About