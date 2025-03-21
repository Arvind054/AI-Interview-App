import { getDocument } from "pdfjs-dist";
import { createContext, useContext, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";

// Creating the Instance of the GenAi model.
const genAI = new GoogleGenerativeAI('AIzaSyCmLok3LuXg_71Pr2KghFt_twVR6lc5RFs');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const InterviewContext = createContext();
export const DataProvider = ({children})=>{
    const [Loading, setLoading] = useState(false);
    const questionsRef = useRef([]) // Store the questions Refrence.
    const resultRef = useRef({})  // Question: Answer Key Value Pairs.
    const InterviewResult = useRef("");

// Function to Initiate Interview By Getting Questiond From The Model For The Parsed user Resume
 async function CreateIntrview(resume, JobDesc, navigator){
    const prompt = `This is the Parsed Text of my Resume \n ${resume} \n for the Job Description ${JobDesc}. \n
    Give Me Five Interview Questions based On my Resume and The Job Description. Just Give The Questions Only.`

// Fetch Model Result
    const result = await model.generateContent(prompt);
    const text = result.response.text();

// Extract Questions From The Response of the Model
    let extracted_questions = [];
    extracted_questions = text.split("\n\n").map(q => q.trim());
    questionsRef.current = extracted_questions;
//Navigate user To The Questions Page;
    navigator("/interview/question/1");
    toast.success("Interview Started");
    setLoading(false);
 }
   
// Function to Fetch The Result after Final Submit.
  async function Evaluate(navigate){
    const resultString = JSON.stringify(resultRef.current);
    const prompt = `I have the Following Question Pair Answers of the Interview\n ${resultString}. \n
    Evaluate The Result assume each question carries 20 points. Return the result In one line and also return 
    5- points of mistakes and suggstions to improve`;
    const result = await model.generateContent(prompt);
     InterviewResult.current = result.response.text();
     navigate("/interview/result");
  }
    return (
        <InterviewContext.Provider value={{CreateIntrview, questionsRef, resultRef,Evaluate,InterviewResult, Loading, setLoading}} >{children}</InterviewContext.Provider>
    )
}
export const InterviewData = ()=>useContext(InterviewContext)