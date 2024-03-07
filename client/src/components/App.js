import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import UserNavBar from "./UserNavBar"
import Authenticate from "../pages/Authenticate";

function App() {

  const [user, setUser] = useState(null)

  const [plants, setPlants] = useState([])
  const [plantCares, setPlantCares] = useState([])

  const [purchasedPlantsAll, setPurchasedPlantsAll] = useState([])

  const contexts = {
    'user':user,
    'plants':plants,
    'purchasedPlantsAll':purchasedPlantsAll,
    'setPurchasedPlantsAll':setPurchasedPlantsAll,
    'cares': [plantCares, setPlantCares],
  }
    
    useEffect(() => {
      fetch('/check_session')
      .then(res => {
        if(res.ok){
          res.json()
          .then(data => {
            setUser(data)
            // getOwnedPlants(data.id)
          })
        } else {
          setUser(null)
        }
      })
    }, [])

    useEffect(() => {
      fetch('/purchased_plants')
      .then(r => r.json())
      .then(purPlants => {
          setPurchasedPlantsAll(purPlants)
      })}, [user])
    
    useEffect(() => {
      fetch("/plants")
      .then(r => r.json())
      .then(plants => setPlants(plants))
    }, [user])
    
    useEffect(() => {
      fetch('/plant_cares')
      .then(resp => resp.json())
      .then(data => setPlantCares(data))
    }, [user])
    
    if(!user) return (
      <>
        <Header />
        <Authenticate updateUser={updateUser}/>
      </>
    )

  function updateUser(user){
    setUser(user)
  }

  return (
    <>
      <Header />
      <NavBar />
      <UserNavBar user={user} updateUser={updateUser}/>

      <Outlet context={contexts} />

    </>)
}

export default App;
