import React from "react";
import "../styles/casestudies.css";
export const Team = (props) => {
  const caseStudies = [
    {
      title: "ExxonMobil",
      description:
        "Optimized over 4,000 oil wells, generating $50M/year in increased revenue.",
    },
    {
      title: "Chevron",
      description:
        "Implemented predictive maintenance systems achieving $100M in annual savings.",
    },
    {
      title: "Intel",
      description:
        "Deployed AI solutions enhancing operational efficiency and innovation.",
    },
  ];

  return (
    <div id="team" className="text-center">
      <div className="case-studies-section">
        <div className="section-title">
          <h2>Case Studies</h2>
        </div>
        <div className="case-study-cards">
          {caseStudies.map((caseStudy, index) => (
            <div className="case-study-card" key={index}>
              <h3 className="case-study-title">{caseStudy.title}</h3>
              <p className="case-study-description">{caseStudy.description}</p>
            </div>
          ))}
        </div>
        {/* <a
          href="#full-case-studies"
          className="btn btn-custom btn-lg page-scroll"
          style={{ marginTop: 40 }}
        >
          Read Full Case Studies
        </a> */}
      </div>
    </div>
  );
};
