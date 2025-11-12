import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import amploraLogo from "../assets/amplora.png";
import bininstructions from "../assets/bininstructions.png";
import nxtdevLogo from "../assets/nxtdev.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add backend API call to store info or send email
    navigate("/confirmation");
  };

  return (
    <div className="landing-page">
      <header>
        <div className="logos-section">
            <div className="company-logos">
                <img src={nxtdevLogo} alt="NxtDev" />
                <img src={bininstructions} alt="BroCo" />
            </div>
            <div className="product-logo">
                <img src={amploraLogo} alt="Amplora" />
            </div>
        </div>

        <h1>Unlock Your Free Guide: <span>“The Ultimate Growth PDF”</span></h1>
        <p>Discover the exact strategies top creators use to grow smarter - not louder. This free PDF will give you actionable steps to elevate your content and audience.</p>

      </header>

      <section className="form-section">
        <h2>Get Your Free PDF Now</h2>
        <p className="credibility-line">
            Built from insights gathered from 100+ successful creators.
        </p>
        <form onSubmit={handleSubmit} style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="industry"
            placeholder="Your Industry (optional)"
            value={formData.industry}
            onChange={handleChange}
          />
          <button type="submit">Send Me the PDF</button>
        </form>
      </section>

    <section className="benefits-section">
        <h3>Inside this PDF:</h3>
        <div className="benefits-list">
            <div className="benefit-item">
                <div className="icon">📈</div>
                <div className="benefit-text">
                    <strong>Proven Strategies:</strong> Step-by-step strategies top creators use to grow faster.
                </div>
            </div>

            <div className="benefit-item">
                <div className="icon">⏱️</div>
                <div className="benefit-text">
                    <strong>Save Time:</strong> Learn how to grow an engaged audience efficiently.
                </div>
            </div>

            <div className="benefit-item">
                <div className="icon">🛠️</div>
                <div className="benefit-text">
                    <strong>Practical Tools:</strong> Get actionable tools to track progress and implement effectively.
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default LandingPage;
