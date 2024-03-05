import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import UserNavBar from "./UserNavBar"
import Authenticate from "../pages/Authenticate";

function App() {
  const [user, setUser] = useState(null)
  const [plantCares, setPlantCares] = useState([])

  const context = {
    'cares': [plantCares, setPlantCares],
    'user': user
  }
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

useEffect(() => {
  fetch('/plant_cares')
    .then(resp => resp.json())
    .then(data => setPlantCares(data))
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
      <Outlet context={context}/>
    </>)
}

export default App;
