import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import UserDetails from "./UserDetails";
import CareLog from "./CareLog";

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
const CareLogContainer = styled.div`
  width: 75%;
`;

function UserProfile() {
  const [user, setUser] = useState({});

  const params = useParams();
  const userId = params.id;

  const cares = useOutletContext();
  const userCares = cares.filter((care) => care.user.id === parseInt(userId));

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  const allPlantCares = [];

  if (user.purchased_plants) {
    user.purchased_plants.forEach((purchasedPlant) => {
      allPlantCares.push(...purchasedPlant.plant_cares);
    });
  }

  const displayUser = { ...user, plant_cares: allPlantCares };

  return (
    <MainContainer>
      <UserInfoContainer>
        <UserDetails user={displayUser} />
      </UserInfoContainer>
      <CareLogContainer>
        <CareLog cares={userCares} />
      </CareLogContainer>
    </MainContainer>
  );
}
export default UserProfile;
