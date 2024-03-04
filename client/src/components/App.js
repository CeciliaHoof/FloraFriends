import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  const [cares, setCares] = useState([])

  useEffect(() => {
    fetch('/plant_cares')
      .then(resp => resp.json())
      .then(data => setCares(data))
  }, [])

  return (
    <>
      <Header />
      <NavBar />
      <Outlet context={cares}/>
    </>)
}

export default App;
