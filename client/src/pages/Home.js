import styled from "styled-components";
import { useState, useEffect } from "react";
import CareLog from "../components/CareLog";
import { useOutletContext } from "react-router-dom";

// import {
//   Grid,
//   GridColumn,
//   GridRow,
//   Image,
//   ImageGroup,
//   Form,
// } from 'semantic-ui-react';

const MainContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SidebarContainer = styled.div`
  background-color: #88b04b;
  width: 25%;
  left: 0px;
  padding: 10px;
`;
const CareLogContainer = styled.div`
  width: 75%;
  margin-right: 10px;
`;

function Home() {
  const [plantCares, setPlantCares] = useOutletContext().cares;
  const loggedInUser = useOutletContext().user;

  if (!plantCares || !loggedInUser) {
    return <h1>loading</h1>;
  }

  function handleDeletePlantCare(plantCare) {
    const updatedCares = plantCares.filter((c) => c.id !== plantCare.id);
    setPlantCares(updatedCares);
  }
  return (
    <MainContainer>
      <SidebarContainer></SidebarContainer>
      <CareLogContainer>
        <CareLog
          cares={plantCares}
          height="700px"
          loggedInUser={loggedInUser}
          purchasedPlants={loggedInUser.purchased_plants}
          onDeleteCare={handleDeletePlantCare}
        />
      </CareLogContainer>
    </MainContainer>
  );
}

export default Home;
