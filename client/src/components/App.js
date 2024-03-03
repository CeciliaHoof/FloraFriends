import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  
  [ plants , setPlants] = useState([])

  useEffect(() => 
  fetch('/plants')
  .then(r => r.json())
  .then(plant_data => setPlants), [])



  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>)
}

export default App;
