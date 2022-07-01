import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Math from './components/Math';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="./math/:a/:b" element={<Math />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
