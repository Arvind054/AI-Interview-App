import React, { useState } from 'react'
import { InterviewData } from '../Context/InterviewContext';
import { useNavigate } from 'react-router-dom'
import pdfToText from "react-pdftotext";
import BgHome from '../assets/BgHome.webp'
import toast from 'react-hot-toast';
const Home = () => {
  const navigator = useNavigate();
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const { CreateIntrview, Loading, setLoading} = InterviewData();
  function extractText(event) {
    const file = event.target.files[0];
    if(!file){
      toast.error("Please Upload The Resume");
      return ;
    }
    pdfToText(file)
      .then((text) => setResume(text))
      .catch((error) => console.error("Failed to extract text from pdf"));
  }
  async function handelStart() {
    if(!resume){
      toast.error("Please Upload Resume");
      return ;
    }
    if(!jobDesc){
      toast.error("Please Add Job Description");
      return ;
    }
    setLoading(true);
     CreateIntrview(resume,jobDesc, navigator);
  }
  return (
    <div className='HomeContainer'>
      <img src={BgHome} alt=""  style={{"width": "45vw" ,"height": "auto"}}/>
      <div className="UserInputs">
      <h3>Let's Begin With The <span style={{"color": "green"}}>Interview</span></h3>
      <p style={{color:"green"}}>Please Upload Your Resume and Job Description</p>
      <div className="inputs">
        <div style={{display:"flex", flexDirection: "column" , width:"45%" , height:"50%", alignItems:"center" , justifyContent:"center", textAlign:"center"}}>
      <input type="file" id='resume' accept="application/pdf" onChange={extractText} />
        <label htmlFor="resume">Upload Your Resume</label>
      </div>
        <textarea name="" id="" onChange={(e) => setJobDesc(e.target.value)} placeholder='Enter Job Description'></textarea>
      </div>
      {!Loading && 
      <button style={{backgroundColor:"green"}} onClick={handelStart} disabled={Loading}>Start Interview</button>
      }
      {Loading && 
      <button style={{backgroundColor:"green"}} onClick={handelStart} disabled={Loading}>Loading</button>
      }
      </div>
    </div>
  )
}

export default Home