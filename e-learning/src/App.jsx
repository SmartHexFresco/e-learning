import Header from "./Components/Header.jsx";
import Subnav from "./Components/Subnav.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDesign from "./PageComponent/ProductDesign.jsx";
import Backend from "./PageComponent/Backend.jsx";
import Frontend from "./PageComponent/Frontend.jsx";
import DataAnalysis from "./PageComponent/DataAnalysis.jsx";
import AiMachineLearning from "./PageComponent/AiMachineLearning.jsx";


function App() {
  return (
    <>
      <Header />
      <Subnav />

      <Routes>
        <Route path="/" element={<ProductDesign />} />
        <Route path="/productdesign" element={<ProductDesign />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/dataanalysis" element={<DataAnalysis />} />
        <Route path="/aimachinelearning" element={<AiMachineLearning />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
