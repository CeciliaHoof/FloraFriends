import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar(){
    return(
        <>
            <Menu text size="large" style={{marginLeft: '2px', marginTop: '0px', marginBottom: '5px'}}>
                <Menu.Item as={NavLink} to='/'>
                    Home
                </Menu.Item>
                <Menu.Item as={NavLink} to='/users'>
                    Users
                </Menu.Item>
                <Menu.Item as={NavLink} to='/plants'>
                    Plants
                </Menu.Item>
            </Menu>
        </>
    )
}

export default NavBar