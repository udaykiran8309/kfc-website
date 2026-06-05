import React from 'react'
import Navbar from "./Components/Navigation";
import Hero from './Components/Hero';
import "./App.css";
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App;