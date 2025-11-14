import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import amploraLogo from "../assets/amplora.png";
import bininstructions from "../assets/bininstructions.png";
import nxtdevLogo from "../assets/nxtdev.png";
import pdfPreview from "../assets/pdfPreview.png";
import pdfLargePreview from "../assets/pdfLargePreview.png";

import { ChartSpline } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Wrench } from 'lucide-react';
import {ChevronDown} from 'lucide-react';
import { Asterisk } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    goal: "",
  });
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);

  const options = [
    { value: "create-content-faster", label: "Create content faster (less manual work)" },
    { value: "stay-consistent", label: "Stay consistent with posting" },
    { value: "know-what-works", label: "Know what content actually works" },
    { value: "convert-followers", label: "Turn followers into paying clients" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.goal) {
      setError(true);
      setErrorText("Please select an option")
      setTimeout(() => {
        setError(false);
        setErrorText("")
      }, 3000);
      return;
    }

  const scriptURL = "AKfycbwJbHTxHU0VJxnOl_OmNAYtdgthVpgoKIwc2lVNNPL8OIucM-aKd_ADKPtYiRSctto";

  await fetch(scriptURL + "?sheet=MainForm", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  navigate("/confirmation");

  };

  useEffect(() => {
    const handleClickOutside = () => setGoalDropdownOpen(false);
    if (goalDropdownOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [goalDropdownOpen]);

  return (
    <div className="landing-page">
      <header>
        <div className="logos-section">
          <div className="product-logo">
              <img src={amploraLogo} alt="Amplora" />
          </div>
        </div>

        <h1>Unlock Your Free Guide: <span>“The Ultimate Growth PDF”</span></h1>
        <p>Discover the exact strategies top creators use to grow smarter - not louder. This free PDF will give you actionable steps to elevate your content and audience.</p>

      </header>

      <div className="row d-flex justify-content-center align-items-center middle-container">
        <div className="col-12 col-md-6 order-1 order-md-2 px-1 px-md-3 d-flex justify-content-center align-items-center">
          <section className="form-section pt-md-5">
            <img src={pdfPreview} alt="" className="pdf-preview-image d-flex d-md-none"/>
            <h2>Get Your Free PDF Now</h2>
            <p className="credibility-line">
                Built from insights gathered from <b className="bolded-fact">100+ successful creators.</b>
            </p>
            <form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="goal" value={formData.goal} />

              <div className="d-flex input-overlay" style={{position: "relative"}}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Asterisk className="asterik-sign"/>
              </div>
              
              <div className="d-flex input-overlay" style={{position: "relative"}}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Asterisk className="asterik-sign"/>
              </div>
              
              <div className="d-flex input-overlay" style={{position: "relative"}}>
                <input
                  type="text"
                  name="industry"
                  onChange={handleChange}
                  placeholder="Your Industry (optional)"
                  value={formData.industry}
                />
              </div>
              
              {/* Custom Goal Dropdown */}
              <div className="d-none d-md-flex m-0" style={{position: "relative", width: "100%", marginRight: "auto", marginLeft: "auto"}}>
                <div className="d-flex input-overlay justify-content-center" style={{position: "relative"}}>
                <div
                  className={`goal-dropdown-opener ${error ? "errored" : ""} d-flex justify-content-space-between align-items-center`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGoalDropdownOpen(!goalDropdownOpen);
                    if (error) setError(false);
                    errorText("")
                  }}
                >
                  <span style={{ wordBreak: "break-word" }}>
                    {formData.goal
                      ? options.find((opt) => opt.value === formData.goal)?.label
                      : "What would help you the most?"}
                  </span>
                  <ChevronDown size={18} className="down-icon"/>
                </div>
                {goalDropdownOpen && (
                  <div className="goal-dropdown-menu">
                    {options.map((option) => (
                      <h6
                        key={option.value}
                        className="m-0 p-2"
                        style={{ cursor: "pointer", whiteSpace: "normal" }}
                        onClick={() => setFormData({ ...formData, goal: option.value })}
                      >
                        {option.label}
                      </h6>
                    ))}
                  </div>
                )}
                {errorText && <span className="dropdown-error-text">{errorText}</span>}
                <Asterisk className="asterik-sign"/>
                </div>
              </div>

              {/* Custom Goal Dropdown */}
              <div className="d-flex d-md-none m-0" style={{position: "relative", width: "110%", marginRight: "auto", marginLeft: "auto"}}>
                <div className="d-flex input-overlay justify-content-center" style={{position: "relative"}}>
                <div
                  className={`goal-dropdown-opener ${error ? "errored" : ""} d-flex justify-content-space-between align-items-center`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGoalDropdownOpen(!goalDropdownOpen);
                    if (error) setError(false);
                    errorText("")
                  }}
                >
                  <span style={{ wordBreak: "break-word" }}>
                    {formData.goal
                      ? options.find((opt) => opt.value === formData.goal)?.label
                      : "What would help you the most?"}
                  </span>
                  <ChevronDown size={18} className="down-icon"/>
                </div>
                {goalDropdownOpen && (
                  <div className="goal-dropdown-menu">
                    {options.map((option) => (
                      <h6
                        key={option.value}
                        className="m-0 p-2"
                        style={{ cursor: "pointer", whiteSpace: "normal" }}
                        onClick={() => setFormData({ ...formData, goal: option.value })}
                      >
                        {option.label}
                      </h6>
                    ))}
                  </div>
                )}
                {errorText && <span className="dropdown-error-text">{errorText}</span>}
                <Asterisk className="asterik-sign"/>
                </div>
              </div>
              
              <button type="submit">Send Me the PDF</button>
            </form>
            
          </section>
        </div>

        <div className="col-12 col-md-6 order-2 order-md-1 px-0 px-md-3 d-flex justify-content-center align-items-center">
          <section className="benefits-section">
              <h3>Inside this PDF:</h3>
              <div className="benefits-list">
                  <div className="benefit-item">
                      <div>
                        <ChartSpline className="icon"/>
                      </div>
                      <div className="benefit-text">
                          <strong>Proven Strategies:</strong> Step-by-step strategies top creators use to grow faster.
                      </div>
                  </div>

                  <div className="benefit-item">
                      <div>
                        <Clock className="icon"/>
                      </div>
                      <div className="benefit-text">
                          <strong>Save Time:</strong> Learn how to grow an engaged audience efficiently.
                      </div>
                  </div>

                  <div className="benefit-item">
                      <div>
                        <Wrench className="icon"/>
                      </div>
                      <div className="benefit-text">
                          <strong>Practical Tools:</strong> Get actionable tools to track progress and implement effectively.
                      </div>
                  </div>
              </div>
              <img src={pdfLargePreview} alt="" className="pdf-lg-preview d-none d-md-flex"/>
          </section>
        </div>  
    </div>
    <div className="footer">
      <div className="logo-sec">
        <img src={nxtdevLogo} alt="" className="top-image"/>
        <img src={bininstructions} alt="" className="bottom-image"/>
      </div>
      <p>By Nxtdev & Bininstructions</p>
    </div>
    
    </div>
  );
};

export default LandingPage;
