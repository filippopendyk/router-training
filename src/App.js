import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import SharedProfileLayout from './pages/SharedProfileLayout';
import ListOfUsers from './Components/ListOfUsers/ListOfUsers';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<SharedProfileLayout/>}>
          <Route index element={<ListOfUsers/>}/>
          <Route path=":username" element={<UserProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
