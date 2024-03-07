import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const PageTitle = styled(Menu.Header)`
  font-size: 18px;
  padding: 15px;
`;

function UserNavBar({ user, updateUser }) {
    const { username, id } = user
    
    function handleClick(){
        fetch('/logout', {method: 'DELETE'})
        updateUser(false)
    }
  return (
      <Menu text style={{marginTop: '0px', backgroundColor: '#D2B48C', paddingLeft: '2px'}}>
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
  );
}

export default UserNavBar;
