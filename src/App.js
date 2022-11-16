import "./App.css";
import Apod from "./pages/planets-pages/Apod";
import PlanetsGlossary from "./pages/planets-pages/PlanetsGlossary";
import MarsWeather from "./pages/planets-pages/MarsWeather";
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
          <Route path="/image-of-the-day" element={<Apod />} />
          <Route path="/planets-glossary" element={<PlanetsGlossary />} />
          <Route path="/weather-on-mars" element={<MarsWeather />} />
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
