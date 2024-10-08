import React from "react";

export const Navigation = (props) => {
  return (
    <nav style={{backgroundColor:'#cf2727'}} id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div style={{display:'flex', alignItems:'center'}}>
            <img src="../img/Logo.webp" alt="Logo" style={{ width: "60px", height: "60px", marginRight: "10px", borderRadius:'35px', marginTop:'-10px' }}/>
            <a className="page-scroll" style={{color:"white",fontSize:"20px"}} href="#page-top">
            Automata Intelligence
          </a>{" "}
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a style={{color:'white'}} href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a  style={{color:'white'}} href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a  style={{color:'white'}} href="#services" className="page-scroll">
                Solutions
              </a>
            </li>
            <li>
              <a  style={{color:'white'}} href="#portfolio" className="page-scroll">
               Industries 
              </a>
            </li>
            <li>
              <a  style={{color:'white'}} href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a style={{color:'white'}} href="#team" className="page-scroll">
                Case Studies
              </a>
            </li>
            <li>
              <a style={{color:'white'}} href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
