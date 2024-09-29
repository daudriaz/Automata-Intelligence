import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Us" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>Our Mission</h3>
              <p>
                To revolutionize industries by merging cutting-edge AI technologies with human ingenuity, 
                creating intelligent ecosystems that adapt, learn, and evolve with your business.
              </p>
              <h3>Our Team</h3>
              <p>
                Comprised of PhDs, engineers, and globally recognized AI experts, our team is dedicated 
                to pushing the boundaries of what's possible in the digital world.
              </p>
              <h3>Our Partners</h3>
              <p>
                We have partnered with industry leaders like ExxonMobil, Intel, NEC, and Chevron to deliver 
                multimillion-dollar impacts and automate the future of business.
              </p>
              <h3>Our Vision</h3>
              <p>
                To be the visionary leader in AI-driven industry disruption, empowering companies to lead 
                their markets with innovative, scalable, and reliable AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
