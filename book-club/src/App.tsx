import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from "./pages/CharacterDetails";


function App() {
  return (
    <Router>
       <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
