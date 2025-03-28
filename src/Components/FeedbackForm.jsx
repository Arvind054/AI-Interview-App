import React from "react";
import TextField from '@mui/material/TextField';
import toast from "react-hot-toast";
export default function FeedbackForm() {
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    };
  
    return (
      <div style={{marginTop:"1.5rem", border:"1px solid grey", borderRadius:"10px", padding:"0.5rem"}}>
        <h3 style={{color:"rgb(72,69,210)"}}>Your Feedback is Valuable✨ For us </h3>
        <form onSubmit={onSubmit} style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column", gap:"1rem"}}>
        <div> 
          <TextField id="standard-basic" label="Name" variant="standard" type="text" name="name" required style={{margin:"1rem"}}/>
          <TextField id="standard-basic" label="email" variant="standard" type="email" name="email" required  style={{margin:"1rem"}}/>
          </div>
          <br />
          <TextField fullWidth label="Message" id="fullWidth" type="text" name="message" required/>
  
          <button type="submit">Submit Form</button>
  
        </form>
  
      </div>
    );
  }