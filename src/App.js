import './App.css';
import Planets from './pages/Planets'; 
import Home from './pages/Home';
import News from './pages/News';
import Header from './components/navbar/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </Router>

      <h1>Space Explorer</h1>
      <Planets />
    </div>
  );
}

export default App;
