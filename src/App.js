import "./App.css";
import ImageOfTheDay from "./pages/ImageOfTheDay";
import PlanetsGlossary from "./pages/PlanetsGlossary";
import FocusOnMars from "./pages/FocusOnMars";
import Home from "./pages/Home";
import News from "./pages/News";
import Videos from "./pages/Videos";
import AboutUs from "./pages/AboutUs";
import Header from "./components/navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/image-of-the-day" element={<ImageOfTheDay />} />
          <Route path="/planets-glossary" element={<PlanetsGlossary />} />
          <Route path="/focus-on-mars" element={<FocusOnMars />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
