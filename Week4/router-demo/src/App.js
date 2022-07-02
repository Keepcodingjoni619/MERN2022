

import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<About/>} path="/:word" />
        <Route element={<About />} path="/:word/:color/:background" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;