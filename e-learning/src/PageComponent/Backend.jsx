

import { useEffect, useState } from "react";
import backendImage from "../assets/backendImage.png";

function Backend() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); 
  }, []);

  return (
    <div className={`page-content ${show ? "show" : ""}`}>
      <div className="Product-design">
        <p>
          <span className="pd">Backend Development (BD)</span> involves server-side
          logic, databases, and APIs. Developers use languages like Python, Java,
          or Node.js to manage data, security, and the underlying infrastructure
          that powers applications.
        </p>
      </div>

      <div className="Product-Design-curriculum">
        <h4>Backend Development Curriculum</h4>
        <p className="pdc">
          This program is designed to provide you with in-depth knowledge on
          this track.
        </p>

        <div className="curriculum-contents">
          <ul className="curriculum-list">
            <li>Programming Fundamentals (Python/Node.js)</li>
            <li>Databases (SQL and NoSQL) and Data Management</li>
            <li>API Development (RESTful services)</li>
            <li>Server Management and Cloud Services (AWS/Azure/GCP)</li>
            <li>Authentication, Security, and Testing</li>
            <li>Version Control (Git) and CI/CD</li>
            <li>Architectural Patterns and System Design</li>
            <li>Caching Mechanisms and Optimization</li>
            <li>Containerization (Docker)</li>
            <li>Web Servers (Nginx) and Deployment</li>
          </ul>

          <div className="curriculum-image">
            <img src={backendImage} alt="Backend Code" />
          </div>
        </div>
      </div>

      <div className="Tuition-sec">
        <h5>Tuition</h5>
        <p>
          Program Duration: <span>6 Months Internship Program</span>
        </p>
        <p>
          Tuition Fee: <span>450,000 Naira only</span>
        </p>
      </div>
    </div>
  );
}

export default Backend;
