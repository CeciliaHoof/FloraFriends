import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CareLog from '../components/CareLog';

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
`

function Home() {
  const [plantCares, setPlantCares] = useState()

  useEffect(() => {
    fetch('/plant_cares')
      .then(resp => resp.json())
      .then(data => setPlantCares(data))
  }, [])

  if (!plantCares){
    return <h1>loading</h1>
  }
    return(
      <MainContainer>
        <SidebarContainer></SidebarContainer>
        <CareLogContainer>
          <CareLog cares={plantCares} height='700px'/>
        </CareLogContainer>
      </MainContainer>
    );
  }
  
export default Home;