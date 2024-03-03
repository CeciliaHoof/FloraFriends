import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>)
}

export default App;
