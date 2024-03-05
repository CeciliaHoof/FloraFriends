import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import UserNavBar from "./UserNavBar"
import Authenticate from "../pages/Authenticate";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/check_session')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          setUser(data)
        })
      } else {
        setUser(null)
      }
    })
}, [])

  function updateUser(user){
    setUser(user)
  }

  if(!user) return (
    <>
      <Header />
      <Authenticate updateUser={updateUser}/>
    </>
  )
  return (
    <>
      <Header />
      <NavBar />
      <UserNavBar user={user} updateUser={updateUser}/>
      <Outlet />
    </>)
}

export default App;
