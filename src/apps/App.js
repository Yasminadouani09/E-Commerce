import React from 'react'
import NavBar from '../layouts/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../Pages/Home';
import Carrousel from '../Components/Carrousel';
import AboutUs from '../Components/AboutUs';

const App = () => {
  return (
    <div style={{ color: "#1a0000" }}>
      <NavBar/>
      <Carrousel />
      <AboutUs/>
    </div>
  );
}

export default App