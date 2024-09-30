import React from "react";

export const InnovationSection = (props) => {
  return (
    <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <h1>
            Innovate, Automate, Elevate
            <span></span>
          </h1>
          <p>
            At Automata Intelligence, we revolutionize industries by merging
            cutting-edge AI technologies with human ingenuity. From advanced
            computer vision to high-performance robotics and deep learning, our
            bespoke solutions drive unmatched efficiency, innovation, and growth
            for organizations worldwide.
          </p>
          {/* <a
            href="#vision"
            className="btn btn-custom btn-lg page-scroll"
          >
            Learn More About Our Vision
          </a>{" "} */}
        </div>
      </div>
    </div>
  );
};
