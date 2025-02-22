import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./components/Places/Places";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/nagagiri_comforts/about" element={<About/>}/>
           <Route path="/nagagiri_comforts/place-to-visit" element={<Places/>}/>
           <Route path="/nagagiri_comforts/contact" element={<Contact/>}/>
           <Route path="/nagagiri_comforts/gallery" element={<Gallery/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
