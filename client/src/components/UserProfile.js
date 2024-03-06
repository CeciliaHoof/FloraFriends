import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import CareLog from "./CareLog";
import PlantCard from "./PlantCard";
import PlantCareForm from "./PlantCareForm";

const MainContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const UserInfoContainer = styled.div`
  background-color: #88b04b;
  width: 25%;
  left: 0px;
  padding: 10px;
`;
const PlantCareContainer = styled.div`
  width: 75%;
  margin-right: 10px;
`;

function UserProfile() {
  const [user, setUser] = useState({});
  const [plantCares, setPlantCares] = useState([])

  const params = useParams();
  const userId = params.id;

  const { purchasedPlantsAll , setPurchasedPlantsAll } = useOutletContext()
  

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);
  

  useEffect(() => {
    fetch('/plant_cares')
      .then(resp => resp.json())
      .then(data => setPlantCares(data))
  }, [])

  const allPlantCares = [];
  const purchasedPlantDisplay = [];

  function handleAddPlant(plant_id){
    console.log('Before Fetch')
    fetch('/purchased_plants' , {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            'plant_id': plant_id
        })
    })
    .then(r => {
        if(r.ok){
            r.json()
            .then(purchased_plant => {
                setPurchasedPlantsAll([...purchasedPlantsAll, purchased_plant])
                console.log('After setPurchasePlant ')
            })
        } else {
            console.log('error')
        }
    })
  }

  

  if (user.purchased_plants) {
    const purchasedPlants = user.purchased_plants
    purchasedPlants.forEach((purchasedPlant) => {
      allPlantCares.push(...purchasedPlant.plant_cares);
    });

    let ownedPlants = purchasedPlants.filter((purPlant) => purPlant.plant_id)
    let plantIDs = ownedPlants.map(plant => plant.plant_id)

    purchasedPlants.map((purchasedPlant) => (
      purchasedPlantDisplay.push(<PlantCard
        {...purchasedPlant.plant}
        imageHeight='100px'
        key={purchasedPlant.plant.id}
        purchasedPlants={purchasedPlantsAll}
        ownedPlants={plantIDs}
        onAddPlant={handleAddPlant}
        onRemovePlant={handleRemovePlant}
      />)
    ));
  }

  function handleRemovePlant(id){
    const purchase_to_remove = purchasedPlantsAll.filter((plantPur) => plantPur.plant_id === id)[0]
    console.log('Starting Remove')
    fetch(`/purchased_plants/${purchase_to_remove.id}` , {
        method: "DELETE",
    })
    console.log('After Delete Fetch, setting purchased plants')
    setPurchasedPlantsAll(purchasedPlantsAll.filter((plantPur) => plantPur.id !== purchase_to_remove.id))
  }

    
  


  const displayUser = { ...user, plant_cares: allPlantCares };

  const userCares = plantCares.filter((care) => care.user.id === parseInt(userId))
  function handleNewPlantCare(plantCare){
    setPlantCares([...plantCares, plantCare])
  }

  return (
    <MainContainer>
      <UserInfoContainer>
        <UserDetails user={displayUser} />
        <div>
        <PlantCareForm purchasedPlants={displayUser.purchased_plants} onCareSubmit={handleNewPlantCare}/>
        </div>
      </UserInfoContainer>
      <PlantCareContainer>
        <CareLog cares={userCares} height='500px'/>
        <Card.Group itemsPerRow={8} centered>
          {purchasedPlantDisplay}
        </Card.Group>
      </PlantCareContainer>
    </MainContainer>
  );
}
export default UserProfile;
