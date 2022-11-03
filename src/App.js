import './App.css';
import Planets from './pages/Planets'; 
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

      <h1>Space Explorer</h1>
      <Planets />
    </div>
  );
}

export default App;
