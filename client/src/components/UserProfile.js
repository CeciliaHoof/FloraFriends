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
  const [plantCares, setPlantCares] = useOutletContext().cares;
  const loggedInUser = useOutletContext().user;
  const { purchasedPlantsAll , setPurchasedPlantsAll } = useOutletContext()


  const params = useParams();
  const userId = params.id;


  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId, plantCares, purchasedPlantsAll]);

  if (!plantCares && !user && !purchasedPlantsAll) {
    return <h1>Loading...</h1>;
  }
  
  
  
  let ownedPlants = purchasedPlantsAll.filter((purPlant) => purPlant.user_id === parseInt(userId))
  let plantIDs = ownedPlants.map(plant => plant.plant_id)

  
  const allPlantCares = ownedPlants.map((purchasedPlant) => purchasedPlant.plant_cares);
  
  const purchasedPlantDisplay = ownedPlants.map((purchasedPlant) => 
    <PlantCard
      {...purchasedPlant.plant}
      imageHeight='100px'
      key={purchasedPlant.plant.id}
      ownedPlants={plantIDs}
      onRemovePlant={handleRemovePlant}
      profileID={userId}
    />
  );
  
  function handleRemovePlant(id){
    const purchase_to_remove = purchasedPlantsAll.filter((plantPur) => plantPur.plant_id === id)[0]
  
    fetch(`/purchased_plants/${purchase_to_remove.id}` , {
        method: "DELETE",
    })
    const newPurchPlants = (purchasedPlantsAll.filter((plantPur) => plantPur.id !== purchase_to_remove.id))
    setPurchasedPlantsAll(newPurchPlants)
  }



  const displayUser = { ...user, plant_cares: allPlantCares };

  const userCares = plantCares.filter(
    (care) => care.user.id === parseInt(userId)
  );

  function handleNewPlantCare(plantCare) {
    setPlantCares([...plantCares, plantCare]);
  }

  function handleDeletePlantCare(plantCare) {
    const updatedCares = plantCares.filter((c) => c.id !== plantCare.id);
    setPlantCares(updatedCares);
  }

  return (
    <MainContainer>
      <UserInfoContainer>
        <UserDetails user={displayUser} />
        {parseInt(userId) === loggedInUser.id && (
          <div>
            <PlantCareForm
              purchasedPlants={displayUser.purchased_plants}
              onCareSubmit={handleNewPlantCare}
            />
          </div>
        )}
      </UserInfoContainer>

      <PlantCareContainer>
        <CareLog
          cares={userCares}
          height="500px"
          loggedInUser={loggedInUser}
          purchasedPlants={displayUser.purchased_plants}
          onCareSubmit={handleNewPlantCare}
          onDeleteCare={handleDeletePlantCare}
        />
        <Card.Group itemsPerRow={8} centered>
          {purchasedPlantDisplay}
        </Card.Group>
      </PlantCareContainer>

    </MainContainer>
  );
}
export default UserProfile;
