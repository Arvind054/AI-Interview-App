import React, { useState } from 'react'
import { InterviewData } from '../Context/InterviewContext';
import { useNavigate } from 'react-router-dom'
import pdfToText from "react-pdftotext";
const Home = () => {
  const navigator = useNavigate();
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const { CreateIntrview } = InterviewData();
  function extractText(event) {
    const file = event.target.files[0];
    pdfToText(file)
      .then((text) => setResume(text))
      .catch((error) => console.error("Failed to extract text from pdf"));
  }
  async function handelStart() {
    //console.log("Started");
     CreateIntrview(resume,jobDesc, navigator);
  }
  return (
    <div>
      <h2>To Begin With The Interview please Upload Your Resume and Job Description</h2>
      <div className="inputs" style={{ "border": "2px solid white" }}>
      <input type="file" accept="application/pdf" onChange={extractText} />
        <textarea name="" id="" onChange={(e) => setJobDesc(e.target.value)}></textarea>
      </div>
      <button onClick={handelStart}>Start Interview</button>
    </div>
  )
}

export default Home