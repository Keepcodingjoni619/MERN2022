import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<About/>} path="/:word"/>
          <Route element={<About/>} path="/:word/:color/:background"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
