import { Image } from "./image";
import React from "react";
import "../styles/industries.css"; // Importing the CSS file
export const Gallery = (props) => {
  const industries = [
    {
      title: "Oil & Gas",
      description:
        "Optimizing operations and enhancing safety through AI-driven solutions.",
    },
    {
      title: "Healthcare",
      description:
        "Revolutionizing patient care with predictive analytics and intelligent systems.",
    },
    {
      title: "Financial Services",
      description:
        "Enhancing security and efficiency with advanced AI and machine learning.",
    },
    {
      title: "Logistics",
      description:
        "Streamlining supply chains and operations for maximum efficiency.",
    },
    {
      title: "Security",
      description:
        "Deploying AI-driven surveillance systems for unmatched protection and insight.",
    },
  ];
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Industries</h2>
          
        </div>
        <div className="industry-cards">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <h3 className="industry-title">{industry.title}</h3>
            <p className="industry-description">{industry.description}</p>
          </div>
        ))}
      </div>
      <a
            href="#vision"
            style={{marginTop:40,maxWidth:"100%"}}
            className="btn btn-custom btn-lg page-scroll"
          >
   Learn More About 
          </a>{" "}
      </div>
    </div>
  );
};
