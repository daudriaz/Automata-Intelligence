import React from "react";
import "../styles/partnerSection.css";

const TransformationPartnerSection = () => {
  return (
    <div className="transformation-section">
      <h2 className="section-title">
        The Ultimate AI Transformation Partner for Global Enterprises
      </h2>
      <p className="section-description">
        Trusted by industry titans like ExxonMobil, Intel, and Chevron, we deliver unrivaled, future-proof AI technology that transforms operational landscapes. Our deep expertise across sectors—oil & gas, finance, logistics, healthcare—makes us the go-to partner for businesses requiring massive scalability, precision, and reliability.
      </p>
      <div className="highlight-stats">
        <div className="stat">
          <h3>$50M/year</h3>
          <p>in revenue increases for clients</p>
        </div>
        <div className="stat">
          <h3>$100M</h3>
          <p>in annual savings through optimized AI solutions</p>
        </div>
        <div className="stat">
          <h3>4,000+</h3>
          <p>oil wells optimized for ExxonMobil</p>
        </div>
      </div>
     
      <a href="#success-stories"   className="btn btn-custom btn-lg page-scroll">
        Explore Our Success Stories
      </a>
    </div>
  );
};

export default TransformationPartnerSection;
