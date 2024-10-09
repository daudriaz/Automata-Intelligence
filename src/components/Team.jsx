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
        <div className="section-title" style={{marginTop:50}}>
          <h2>Our Clients</h2>
        </div>
        <div className="clients-grid">
          <div className="client-box">
            {" "}
            <img
              src="../img/clients/chevron_logo.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div className="client-box"> <img
              src="../img/clients/exonmobil.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/petro.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/intel.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ width: "100px", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/NEC.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ width: "100px", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/xto.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ width: "100px", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/bentley.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ width: "100px", height: "50px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/via.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "30px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/amberg.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "30px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/helvetis.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "30px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/3i.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "70px" }}
            /></div>
          <div className="client-box"><img
              src="../img/clients/pulsar.png"
              alt="WhatsApp QR Code"
              className="qr-code"
              style={{ maxWidth: "90%", height: "70px" }}
            /></div>
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
