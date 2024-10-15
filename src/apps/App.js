import React from 'react'
import NavBar from '../layouts/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../Pages/Home';
import Carrousel from '../Components/Carrousel';
import AboutUs from '../Components/AboutUs';
import Realeas from '../Components/Realeas';

const App = () => {
  return (
    <div >
      <NavBar/>
      <Carrousel />
      <AboutUs />
      <Realeas/>
    </div>
  );
}

export default App