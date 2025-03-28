import { getDocument } from "pdfjs-dist";
import { createContext, useContext, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";

// Creating the Instance of the GenAi model.
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const InterviewContext = createContext();

// Data Provider
export const DataProvider = ({ children }) => {
    const [Loading, setLoading] = useState(false);
    const questionsRef = useRef([]) // Store the questions Refrence.
    const resultRef = useRef({})  // Question: Answer Key Value Pairs.
    const InterviewResult = useRef("");
    const interviewFeedbackRef = useRef("");
    const [hint, setHint] = useState("");

    // Function to Initiate Interview By Getting Questiond From The Model For The Parsed user Resume
    async function CreateIntrview(resume, JobDesc, navigator) {
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

    // Function To generate Hint For The Given Question.
    async function getHint(question, questioNumber) {
        setLoading(true);
        const prompt = `The Following is an Interview Question: \n ${question}.\n Assume your are the Interviewer, Give a small hit for the question to the Candidate.`
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        setHint(text);
        setLoading(false);
    }
    // Function to Fetch The Score after Final Submit.
    async function Evaluate(navigate) {
        setLoading(true);
        const resultString = JSON.stringify(resultRef.current);
        const prompt = `The Following  are the Question Answers pairs of the Interview\n ${resultString}. \n
    Evaluate The Result assume each question carries 20 points and total of 100 points.Evaluate and provide the Score Only.`;
        const result = await model.generateContent(prompt);
        InterviewResult.current = result.response.text();
        navigate("/interview/result");
        setLoading(false);
    }

    // Function to Get the Feedback Of the Individual.
    async function GetFeedback(navigate) {
        setLoading(true);
        const resultString = JSON.stringify(resultRef.current);
        const prompt = `The Following are the Question Answer Pairs of an Interview\n ${resultString}. \n
    Provide the Feedback based on the answers of the questions.Just Give the Mistakes and the key areas to improve 
    in points.`
        const result = await model.generateContent(prompt);
        interviewFeedbackRef.current = result.response.text();
        navigate("/interview/Feedback");
        setLoading(false);
    }
    return (
        <InterviewContext.Provider value={{ CreateIntrview, questionsRef, resultRef, Evaluate, InterviewResult, Loading, setLoading, GetFeedback, interviewFeedbackRef, getHint, hint, setHint }} >{children}</InterviewContext.Provider>
    )
}
export const InterviewData = () => useContext(InterviewContext)