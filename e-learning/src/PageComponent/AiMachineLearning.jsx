

import { useEffect, useState } from "react";
import aiMlImage from "../assets/aiMlImage.png";

function AiMachineLearning() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // fade-in when page loads
  }, []);

  return (
    <div className={`page-content ${show ? "show" : ""}`}>
      <div className="Product-design">
        <p>
          <span className="pd">AI & Machine Learning (AI/ML)</span> focuses on
          creating systems that can learn from data, identify patterns, and
          make decisions with minimal human intervention. This track covers
          algorithms, neural networks, and computer vision.
        </p>
      </div>

      <div className="Product-Design-curriculum">
        <h4>AI Machine Learning Curriculum</h4>
        <p className="pdc">
          This program is designed to provide you with in-depth knowledge on
          this track.
        </p>

        <div className="curriculum-contents">
          <ul className="curriculum-list">
            <li>Foundational Mathematics & Statistics</li>
            <li>Python Programming (TensorFlow, PyTorch)</li>
            <li>Machine Learning Algorithms (Supervised, Unsupervised Learning)</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision and Image Processing</li>
            <li>Data Preprocessing and Feature Engineering</li>
            <li>Model Deployment Strategies (MLOps)</li>
            <li>Ethics in AI and Data Bias</li>
            <li>Generative AI and Reinforcement Learning</li>
          </ul>

          <div className="curriculum-image">
            <img src={aiMlImage} alt="AI and Machine Learning" />
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

export default AiMachineLearning;

