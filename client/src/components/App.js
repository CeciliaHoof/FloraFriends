import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import UserNavBar from "./UserNavBar"
import Authenticate from "../pages/Authenticate";

function App() {

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [plants, setPlants] = useState([])
  const [plantCares, setPlantCares] = useState([])

  const [purchasedPlantsAll, setPurchasedPlantsAll] = useState([])

  const contexts = {
    'user':user,
    'setUser': setUser,
    'plants':plants,
    'purchasedPlantsAll':purchasedPlantsAll,
    'setPurchasedPlantsAll':setPurchasedPlantsAll,
    'cares': [plantCares, setPlantCares],
    'users': users
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

    useEffect(() => {
      fetch('/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap:'0px' }}>
  <div style={{ height: '20%', display:'flex', flexDirection: 'column', gap:'0px'  }}>
    <div style={{height:'40%'}}>
    <Header />
    </div>
    <div style={{height:'25%'}}>
    <NavBar />
    </div>
    <div style={{height:'20%'}}>
    <UserNavBar user={user} updateUser={updateUser}/>
    </div>
  </div>
  <div style={{ height: '80%' }}>
    <Outlet context={contexts} />
  </div>
</div>)
}

export default App;
