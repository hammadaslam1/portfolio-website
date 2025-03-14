import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import CV from "./components/pages/MeriCV";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/cv" element={<CV />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
