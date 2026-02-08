


import { useEffect, useState } from "react";
import uiKit from "../assets/ui-kit.png";

function ProductDesign() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-content ${show ? "show" : ""}`}>
      <div className="Product-design">
        <p>
          <span className="pd">Product Design (PD)</span> is the process of creating and developing a physical or digital product from concept to completion, ensuring they meet the user’s goals and business goals. This track encompasses a wide range of skills, including user research, user interface (UI) design, interaction design, prototyping, and usability testing.
        </p>
      </div>

      <div className="Product-Design-curriculum">
        <h4>Product Design Curriculum</h4>
        <p className="pdc">This program is designed to provide you with in-depth knowledge on this track.</p>
        <div className="curriculum-contents">
          <ul className="curriculum-list">
            <li>Principles of Design and Introduction to Figma</li>
            <li>User Data, User Research and Personas</li>
            <li>Ideation</li>
            <li>Usability Testing and Evaluation</li>
            <li>UI Design Elements and Components</li>
            <li>UI Design Patterns</li>
            <li>Branding and UI</li>
            <li>Design Systems</li>
            <li>Blockchain/Web3</li>
            <li>Multi Device Design and Responsive Design</li>
          </ul>
          <div className="curriculum-image">
            <img src={uiKit} alt="UI Kit" />
          </div>
        </div>
      </div>

      <div className="Tuition-sec">
        <h5>Tuition</h5>
        <p>Program Duration: <span>6 Months Internship Program</span></p>
        <p>Tuition Fee: <span>450,000 Naira only</span></p>
      </div>
    </div>
  );
}

export default ProductDesign;

