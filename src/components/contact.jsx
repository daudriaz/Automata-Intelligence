import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "../styles/footer.css";
const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                Ready to unlock hidden efficiencies and drive innovation? Contact us to explore how our bespoke AI solutions can elevate your business.
                </p>
              </div>
              <img
                        src="../img/map.png"
                        alt="WhatsApp QR Code"
                        className="qr-code"
                       style={{ width: '100%', height: '50%' }}
                      />
              {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form> */}
              <div className="contact-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-item">
                      <h4 style={{color:'white'}}><strong>Email</strong></h4>
                      <a href="mailto:info@automataintelligence.ai" style={{textDecoration:'none', color:'white'}}>info@automataintelligence.ai</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-item">
                      <h4 style={{color:'white'}}><strong>Phone Number</strong></h4>
                      <p>+44 7735 907444</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-item">
                      <h4 style={{color:'white'}}><strong>WhatsApp</strong></h4>
                      <p>Scan the QR code to contact us on WhatsApp:</p>
                      <img
                        src="../img/QR.jpeg"
                        alt="WhatsApp QR Code"
                        className="qr-code"
                        style={{ width: '200px', height: '200px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div> */}
        
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
       
        </div>
       
        <div className="container" style={{marginTop:50,marginBottom:50}}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
             <p> Automata Intelligence is not just an AI provider—it's the partner you trust when the stakes are high and the expectations higher. We work with the world's most complex enterprises to unlock hidden efficiencies, drive innovation, and achieve exponential business growth. By choosing Automata Intelligence, you're ensuring your business stays two steps ahead in a world where AI is the future.</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Discover More
                </a>{" "}
              </div>
            </div>
          </div>
      </div>
      <div id="footer">
      <div className="container text-center">
  
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Solutions</a></li>
            <li><a href="#portfolio">Industries</a></li>
            <li><a href="#team">Case Studies</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <p>
          &copy; Automata Intelligence.
        </p>
      </div>
    </div>
    </div>
  );
};
