

import { useEffect, useState } from "react";
import dataAnalysisImage from "../assets/dataAnalysisImage.png";

function DataAnalysis() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); 
  }, []);

  return (
    <div className={`page-content ${show ? "show" : ""}`}>
      <div className="Product-design">
        <p>
          <span className="pd">Data Analysis (DA)</span> involves inspecting,
          cleansing, transforming, and modeling data to discover useful
          information, inform conclusions, and support decision-making. This
          track covers tools like Excel, SQL, and Python libraries.
        </p>
      </div>

      <div className="Product-Design-curriculum">
        <h4>Data Analysis Curriculum</h4>
        <p className="pdc">
          This program is designed to provide you with in-depth knowledge on
          this track.
        </p>

        <div className="curriculum-contents">
          <ul className="curriculum-list">
            <li>Introduction to Excel for Data Analysis</li>
            <li>Data Cleaning, Transformation, and Modeling (Power Query)</li>
            <li>Statistical Concepts and Techniques</li>
            <li>SQL for Data Extraction and Database Management</li>
            <li>Python Fundamentals (Pandas, NumPy)</li>
            <li>Data Visualization and Reporting (Matplotlib, Power BI)</li>
            <li>Exploratory Data Analysis</li>
            <li>Data Storytelling and Communication of Insights</li>
            <li>Basic Machine Learning Concepts</li>
            <li>Real-world Case Studies and Final Project</li>
          </ul>

          <div className="curriculum-image">
            <img src={dataAnalysisImage} alt="Data Analysis" />
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

export default DataAnalysis;
