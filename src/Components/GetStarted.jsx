import React from 'react'
import { useNavigate } from 'react-router-dom'
import Bg from '../assets/Bg.webp'
import { TypeAnimation } from 'react-type-animation';
const GetStarted = () => {
    const navigator = useNavigate();
    const handelStart= ()=>{
        navigator('/Home');
    }
  return (
    <div className='GetStrtedPage'>
      <img src={Bg} alt=""  style={{"width":"99vw", "height": "99vh"}}/>
      <div className="controls">
       <h3>AI 🤖 Interview App</h3>
       <TypeAnimation
      sequence={[
        '🔥 Mock Interviews with AI',
        1000,
        '🎤 Behavioral & Technical Interviews ',
        1000,
        '📊 Detailed Performance Report ',
        1000,
        '✅ Start Practicing Today🚀✨',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
     <br></br>
       <button style={{'background':'blue'}} onClick={handelStart}>Get Started</button>
       </div>
    </div>
  )
}

export default GetStarted