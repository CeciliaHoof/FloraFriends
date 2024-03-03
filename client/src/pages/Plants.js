
import { useState, useEffect } from "react"
// import { Container } from "semantic-ui-react"

import PlantContainer from  "../components/PlantContainer"

function Plants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("plants")
      .then(r => r.json())
      .then(plants => setPlants(plants))
    }, [])

    
  
    return(
    <div >
      <h1>Welcome to Plants Page!</h1>
      <PlantContainer plants={plants}  />
    </div>
    )


  }
  
export default Plants;