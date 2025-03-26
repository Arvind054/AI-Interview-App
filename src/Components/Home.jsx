import React, { useState } from 'react'
import { InterviewData } from '../Context/InterviewContext';
import { useNavigate } from 'react-router-dom'
import pdfToText from "react-pdftotext";
import BgHome from '../assets/BgHome.webp'
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Home = () => {
  const navigator = useNavigate();
  const [resume, setResume] = useState(null);
  const [Questions, setQuestions] = useState("");
  const [exprience, setExprience] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
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
    if(!type){
      toast.error("Please select Interview Type");
      return ;
    }
    if(!Questions){
      toast.error("Please selcet No. of Questions");
      return ;
    }
    if(!exprience){
      toast.error("Please select exprience");
      return ;
    } 
    if(!difficulty){
      toast.error("Please select Difficulty");
      return ;
    } 
    
    setLoading(true);
     CreateIntrview(resume,jobDesc, navigator);
  }
  return (
    <>
    <Navbar></Navbar>
    <div className='HomeContainer'>
      <img src={BgHome} alt=""  style={{"width": "45vw" ,"height": "auto"}}/>
      <div className="UserInputs">
      <h3 style={{fontFamily:"sans-serif"}}>Before We start With the  <span style={{"color": "rgb(72,69,210)"}}>Interview</span></h3>
      <div className="inputs">
   
        <div style={{display:"flex", flexDirection: "row" , width:"80%" , height:"50%", alignItems:"center" , justifyContent:"center", textAlign:"center", gap:"2rem"}}>
        <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />} style={{backgroundColor:""}} >
      Upload Resume
      <VisuallyHiddenInput
        type="file"
        onChange={(e) => extractText(e)}
        multiple
      />
    </Button>
    <TextField id="outlined-basic" label="Job Description" variant="outlined" onChange={(e)=>setJobDesc(e.target.value)} value={jobDesc}/>
      </div>
        <div className='detailsSelection' style={{width:"80%"}}>
        <FormControl fullWidth>
        <InputLabel id="TypeLabel">Interview Type</InputLabel>
        <Select
          labelId="TypeLabel"
          id="Type"
          label="Interview Type"
          value={type}
          onChange={(e)=>setType(e.target.value)}
        >
          <MenuItem value="DSA">DSA</MenuItem>
          <MenuItem value="Project Based">Project Based</MenuItem>
          <MenuItem value="Techincal">Techincal</MenuItem>
        </Select>
      </FormControl>
        <FormControl fullWidth>
        <InputLabel id="Questions">No. of Questions</InputLabel>
        <Select
          labelId="Questions"
          id="Questions"
          label="No. of Questions"
          value={Questions}
          onChange={(e)=>setQuestions(e.target.value)}
        >
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="detailsSelection" style={{width:"80%"}}>
        <FormControl fullWidth>
        <InputLabel id="Exprience">Exprience</InputLabel>
        <Select
          labelId="Exprience"
          id="Exprience"
          label="Exprience"
          value={exprience}
          onChange={(e)=>setExprience(e.target.value)}
        >

          <MenuItem value="0-1 years">0-1 years</MenuItem>
          <MenuItem value="1-2 years">1-2 years</MenuItem>
          <MenuItem value="2-3 years">2-3 years</MenuItem>
          <MenuItem value="3-5 years">3-5 years</MenuItem>
          <MenuItem value="5+ years">5+ years</MenuItem>
        </Select>
      </FormControl>
        <FormControl fullWidth>
        <InputLabel id="Difficulty">Difficulty</InputLabel>
        <Select
          labelId="Difficulty"
          id="Difficulty"
          label="Difficulty"
          value={difficulty}
          onChange={(e)=>setDifficulty(e.target.value)}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">hard</MenuItem>
        </Select>
      </FormControl>
          </div>
      </div>
      {!Loading && 
      <button style={{backgroundColor:"rgb(72,69,210)"}} onClick={handelStart} disabled={Loading}>Start Interview</button>
      }
      {Loading && 
      <button style={{backgroundColor:"rgb(72,69,210)"}} onClick={handelStart} disabled={Loading}>Loading</button>
      }
      </div>
    </div>
    </>
  )
}

export default Home