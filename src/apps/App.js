import React from 'react'
import NavBar from '../layouts/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../Pages/Home';
import Carrousel from '../Components/Carrousel';

const App = () => {
  return (
    <div>
      <NavBar />
      <Carrousel/>
    </div>
  )
}

export default App