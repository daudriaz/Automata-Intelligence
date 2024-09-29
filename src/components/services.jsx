import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Solutions</h2>
          <p>
            Discover our range of AI-driven solutions designed to transform your business.
          </p>
        </div>
        {/* <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            "loading"
          )}
        </div> */}
        <div className="section-title">
          <h2>Our Expertise</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Autonomous Robotics & Drone Control</h3>
            <p>High-performance robotics solutions for complex industrial applications.</p>
          </div>
          <div className="col-md-6">
            <h3>Predictive Maintenance Systems</h3>
            <p>AI that anticipates issues before they occur, saving millions annually.</p>
          </div>
          <div className="col-md-6">
            <h3>Computer Vision & Deep Learning</h3>
            <p>Advanced systems for surveillance, optimization, and operational excellence.</p>
          </div>
          <div className="col-md-6">
            <h3>Natural Language Processing (NLP)</h3>
            <p>Transforming data into actionable intelligence across your enterprise.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary">
              Discover How Our Solutions Can Transform Your Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
