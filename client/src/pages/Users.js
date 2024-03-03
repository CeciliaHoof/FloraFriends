import { useState, useEffect } from "react";
import { Item } from "semantic-ui-react"
import styled from "styled-components"
import UserRow from "../components/UserRow"
import UserFilter from "../components/UserFilter";

const UserContainer = styled.div`
  display: flex;
  gap: 10px;
`
const SidebarContainer = styled.div`
  background-color: #88B04B;
  width: 300px;
  left: 0px;
  padding: 10px;
`

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])

  const userDisplay = users.map((user) => {
    const user_plant_cares = []

    for (let i=0; i < user.purchased_plants.length; i++) {
        for (let x=0; x<user.purchased_plants[i].plant_cares.length; x++){
            user_plant_cares.push(user.purchased_plants[i].plant_cares[x])
        }
    }
    return <UserRow user={user} num_plant_cares = {user_plant_cares.length} key={user.id} />
  })
  
    return (
      <>
        <UserContainer>
          <SidebarContainer>
            <UserFilter />
          </SidebarContainer>
          <div>
            <h2>User Accounts</h2>
          <Item.Group divided>
            {userDisplay}
          </Item.Group>
          </div>
          </UserContainer>
      </>
    )
  }
  
export default Users;