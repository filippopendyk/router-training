import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<SharedProfileLayout/>}>
          <Route index element={<Profile/>}/>
          <Route path="/edit" element={<EditProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
