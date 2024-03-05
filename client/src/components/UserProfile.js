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

  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId, plantCares]);

  if (!plantCares || plantCares.length === 0) {
    return <h1>Loading...</h1>;
  }

  const allPlantCares = [];
  const purchasedPlantDisplay = [];
  if (user.purchased_plants) {
    const purchasedPlants = user.purchased_plants;
    purchasedPlants.forEach((purchasedPlant) => {
      allPlantCares.push(...purchasedPlant.plant_cares);
    });
    purchasedPlants.map((purchasedPlant) =>
      purchasedPlantDisplay.push(
        <PlantCard
          {...purchasedPlant.plant}
          imageHeight="100px"
          key={purchasedPlant.plant.id}
        />
      )
    );
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
