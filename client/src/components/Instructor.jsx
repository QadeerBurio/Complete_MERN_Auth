import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.png";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Abdul Qadeer Buriro</h1>
          <h4>Your Instructor</h4>
          <p>
            Hello! I'm Abdul Qadeer, a passionate MERN stack developer
            with a love for developing and building scalable, robust applications.
            With 2 years of experience in JavaScript, React, Node.js, Express, and
            MongoDB, I am dedicated to helping developers learn and grow their
            skills.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/QadeerBurio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aq-khan-110buriro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://abdul-qadeer-buriro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
