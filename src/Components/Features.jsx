import React from 'react'
import Navbar from './Navbar'
import FeatureCard from './FeatureCard'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssistantIcon from '@mui/icons-material/Assistant';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
const Features = () => {
  return (
    <>
    <Navbar></Navbar>
    <div style={{width:"100vw", marginTop:"5rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
         <h2 style={{color:"rgb(72,69,210)" , padding:"1rem"}}>Features✨</h2>
         <div style={{width:"80vw", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:"5rem"}}>
              <FeatureCard  logo={<RocketLaunchIcon></RocketLaunchIcon>} heading={"Resume Parsing"} description={"Parsing of Resume to extract Information about the candidate"}></FeatureCard>
              <FeatureCard  logo={<DynamicFeedIcon></DynamicFeedIcon>} heading={"Varieties of Interviews  "} description={"Different Types of Interviews Based on Candidates's Choice"}></FeatureCard>
              <FeatureCard  logo={<RestartAltIcon></RestartAltIcon>} heading={"AI Generated Questions"} description={"Generation of Questions By AI Based on Candidates Intview Type"}></FeatureCard>
              <FeatureCard  logo={<PsychologyIcon></PsychologyIcon>} heading={"Response Analysis By AI"} description={"Analysing and Scoring the responses of Candidate By AI"}></FeatureCard>
              <FeatureCard  logo={<AssistantIcon></AssistantIcon>} heading={"Feedback By AI"} description={"AI provides Deatiled Feedback and the Mistakes to the Candidate"}></FeatureCard>
              <FeatureCard  logo={<AutoGraphIcon></AutoGraphIcon>} heading={"Increase in Performance"} description={"Candidates can Increase  performance  in the Intview  upto 25-30% by Practicing."}></FeatureCard>
         </div>
    </div>
    </>
  )
}

export default Features