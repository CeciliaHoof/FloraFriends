import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const PageTitle = styled(Menu.Header)`
  font-size: 20px;
  padding: 15px;
`;
const StyledMenuContainer = styled.div`
  margin-top: -1em;
  padding-right: 5px;
  background-color: #D2B48C
`;

function UserNavBar({ user, updateUser }) {
    const { username, id } = user
    
    function handleClick(){
        fetch('/logout', {method: 'DELETE'})
        updateUser(false)
    }
  return (
    <StyledMenuContainer>
      <Menu text>
        <PageTitle>{`Welcome, ${username}!`}</PageTitle>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to={`/profile/${id}`}>
            View Profile
          </Menu.Item>
          <Menu.Item as={NavLink} to={`/manage_account/${id}`}>
            Manage Account
          </Menu.Item>
          <Menu.Item as={NavLink} to="/" onClick={handleClick}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </StyledMenuContainer>
  );
}

export default UserNavBar;
