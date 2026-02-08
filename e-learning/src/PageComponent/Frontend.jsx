
import { useEffect, useState } from "react";
import frontendImage from "../assets/frontendImage.png";

function Frontend() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); 
  }, []);

  return (
    <div className={`page-content ${show ? "show" : ""}`}>
      <div className="Product-design">
        <p>
          <span className="pd">Frontend Development (FD)</span> focuses on the user interface and experience—everything the user sees and interacts with in a browser. Key skills include HTML, CSS, JavaScript, and modern frameworks like React.
        </p>
      </div>

      <div className="Product-Design-curriculum">
        <h4>Frontend Development Curriculum</h4>
        <p className="pdc">
          This program is designed to provide you with in-depth knowledge on this track.
        </p>

        <div className="curriculum-contents">
          <ul className="curriculum-list">
            <li>HTML5, CSS3 (Flexbox/Grid), and JavaScript (ES6+)</li>
            <li>Responsive Web Design and Accessibility</li>
            <li>Modern UI Frameworks (React, Vue, or Angular)</li>
            <li>Version Control (Git) and Collaboration</li>
            <li>Testing and Debugging (Browser DevTools)</li>
            <li>API Integration and Asynchronous Requests</li>
            <li>Web Performance Optimization</li>
            <li>Introduction to TypeScript</li>
            <li>State Management (Redux, Context API)</li>
            <li>Building and Bundling Tools (Webpack, Babel)</li>
          </ul>

          <div className="curriculum-image">
            <img src={frontendImage} alt="Frontend Design" />
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

export default Frontend;

