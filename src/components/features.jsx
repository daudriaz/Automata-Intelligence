import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className="text-center section-title">
            <h1>
              Powered by Innovation, Driven by Excellence
              <span></span>
            </h1>
            <p>
              We specialize in delivering advanced AI capabilities others only
              dream of. From autonomous robotics and drone control to predictive
              maintenance systems saving our clients millions annually, we don't
              just deliver solutions—we redefine possibilities.
            </p>
          </div>
        </div>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h1>Key Pillars</h1>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-12 col-sm-6 col-md-3 mb-4 text-center"
                >
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        {/* <a href="#vision" className="btn btn-custom btn-lg page-scroll" style={{marginBottom:50,marginTop:50}}>
          Meet Our Team of Experts
        </a>{" "} */}
      </div>
    </div>
  );
};
