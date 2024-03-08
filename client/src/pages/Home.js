import styled from "styled-components";
import CareLog from "../components/CareLog";
import CareLogFilter from "../components/CareLogFilter";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
`;
const SidebarContainer = styled.div`
  background-color: #88b04b;
  width: 25%;
  left: 0px;
  padding: 10px;
`;
const CareLogContainer = styled.div`
  width: 75%;
`;

function Home() {
  const [filterPlant, setFilterPlant] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [plantCares, setPlantCares] = useOutletContext().cares;
  const loggedInUser = useOutletContext().user;

  if (plantCares.error) {
    return <h1>loading</h1>;
  }

  function handleDeletePlantCare(plantCare) {
    const updatedCares = plantCares.filter((c) => c.id !== plantCare.id);
    setPlantCares(updatedCares);
  }

  const purchasedPlants = [
    ...new Set(
      plantCares.map((plantCare) => plantCare.purchased_plant.plant.common_name)
    ),
  ];

  const users = [
    ...new Set(
      plantCares.map((plantCare) => plantCare.user.username)
    ),
  ];

  const plantCareDisplay = plantCares
    .filter(care => {
      return filterPlant === "" || care.purchased_plant.plant.common_name.includes(filterPlant)
    })
    .filter(care => {
      return searchUser === "" || care.user.username === searchUser
    })
    
  return (
    <MainContainer>
      <SidebarContainer>
        <h2 >CareLog</h2>
        <CareLogFilter
          plants={purchasedPlants}
          users={users}
          onPlantSelect={setFilterPlant}
          onUserSearch={setSearchUser}
        />
      </SidebarContainer>
      <CareLogContainer>
        <CareLog
          cares={plantCareDisplay}
          height="100%"
          loggedInUser={loggedInUser}
          purchasedPlants={loggedInUser.purchased_plants}
          onDeleteCare={handleDeletePlantCare}
        />
      </CareLogContainer>
    </MainContainer>
  );
}

export default Home;
