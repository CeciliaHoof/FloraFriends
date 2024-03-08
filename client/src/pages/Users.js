import { useState, useEffect } from "react";
import { Item, Segment } from "semantic-ui-react";
import styled from "styled-components";
import UserRow from "../components/UserRow";
import UserFilter from "../components/UserFilter";

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
const UserContainer = styled.div`
  width: 75%;
`

function Users() {
  const [users, setUsers] = useState([])
  const [filterPlant, setFilterPlant] = useState('');
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch('/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  function handleSortSelection(sortSelection) {
    setSortBy(sortSelection);
  }

  function handlePlantSelection(common_name) {
    setFilterPlant(common_name);
  }

  if(!users){
    return <h1>Loading</h1>
  }

  const allPurchasedPlantsSet = new Set(users.reduce((result, user) => {
    const purchasedPlants = user.purchased_plants.map((plant) => plant.plant.common_name);
    
    return result.concat(purchasedPlants);
  }, []));
  
  const allPurchasedPlants = [...allPurchasedPlantsSet];
  
  const userDisplay = users
    .map((user) => {
      const userPlantCares = [];

      for (let i = 0; i < user.purchased_plants.length; i++) {
        for (let x = 0; x < user.purchased_plants[i].plant_cares.length; x++) {
          userPlantCares.push(user.purchased_plants[i].plant_cares[x]);
        }
      }
      return {
        ...user,
        plant_cares: userPlantCares,
      };
    })
    .filter((user) => {
      const purchasedPlants = user.purchased_plants.map((plant) => plant.plant.common_name);
      return filterPlant === "" || purchasedPlants.includes(filterPlant);
    })
    .sort((user1, user2) => {
      if (sortBy === "plants") {
        return user2.purchased_plants.length - user1.purchased_plants.length;
      }
      else if (sortBy === "cares"){
        return user2.plant_cares.length - user1.plant_cares.length;
      }
      else {
        return 0
      }
    })
    .map((user) => {
      return (
        <UserRow
          user={user}
          num_plant_cares={user.plant_cares.length}
          key={user.id}
        />
      );
    });
  return (
    <MainContainer>
      <SidebarContainer>
        <h2>User Accounts</h2>
        <UserFilter
          sortBy={sortBy}
          onSortSelect={handleSortSelection}
          onPlantSelect={handlePlantSelection}
          plants={allPurchasedPlants}
        />
      </SidebarContainer>
      <UserContainer>
        <Segment style={{ height: "80vh", overflowY: "auto" }}>
        <Item.Group divided>{userDisplay}</Item.Group>
        </Segment>
      </UserContainer>
    </MainContainer>
  );
}

export default Users;
