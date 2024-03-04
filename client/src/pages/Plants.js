
import { useState, useEffect } from "react"
import { 
  Container,
  Header,
  Divider
} from "semantic-ui-react"

import PlantContainer from  "../components/PlantContainer"

function Plants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("plants")
      .then(r => r.json())
      .then(plants => setPlants(plants))
    }, [])

    
  
    return(
    < >
      <Header size='huge' textAlign='center' style={{padding:20}}>The Plant Cabinet</Header>
      <Divider />
      
        <Header  size='small' textAlign='center' style={{margin:20}}> 
          <p>Our Database is expanding!</p>
          <p>If we are missing your favorite plant, let us know.</p>
        {/* THOUGHTS: We could Link this bottom part to the Contact Page? */}
        </Header>
  
      <PlantContainer plants={plants}  />
    </>
    )


  }
  
export default Plants;