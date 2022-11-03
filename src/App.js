import './App.css';
import Planets from './pages/Planets';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Form } from 'react-router-dom';
import NewsPage from './pages/News';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

      </Router>

      <h1>Space Explorer</h1>
      <Planets />
      <NewsPage />
    </div>
  );
}

export default App;
