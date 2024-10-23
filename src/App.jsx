import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
