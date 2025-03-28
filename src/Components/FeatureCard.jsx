import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { IconButton } from '@mui/material';


const FeatureCard = ({ logo, heading, description }) => {
  return (
    <div className="FeatureCard">
    <Card className="" sx={{ maxWidth: 300, textAlign: "center", padding: 2, boxShadow: 3 }} style={{borderRadius:"10px"}}>
      <IconButton style={{color:"rgb(72,69,210)"}}>{logo}</IconButton>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default FeatureCard;