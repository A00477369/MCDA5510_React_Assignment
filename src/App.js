import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/my-town" element={<MyTown/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
