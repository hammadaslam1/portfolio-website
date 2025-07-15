import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/MeriCV";
import Card from "./pages/Card";

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
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
