import { useState } from "react";
import red_secret from "../assets/red_secret.jpg";
import mini_monstera from "../assets/mini_monstera.jpeg";
import parlor_palm from "../assets/parlor_palm.jpg";
import snake_plant from "../assets/snake_plant.jpg";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";
import styled from "styled-components";


import {
  Grid,
  GridColumn,
  Image,
  ImageGroup,
} from "semantic-ui-react";

const WelcomeMessage = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  padding: 3%;
  background-color: ${({ customStyles }) => (customStyles ? "" : "#88B04B")};
`;

const WelcomeMessageText = styled.h1`
  font-size: 300%;
  text-align: center;
`;
const SubMessageText = styled.p`
  font-size: 200%;
  text-align: center;
`;
const LoginForm = styled.div`
  width: 100%;
  background-color: #88b04b;
  padding: 10px;
`;

function Authenticate({ updateUser }) {
  const [hasAccount, setHasAccount] = useState(false);
  
  const wel_mssg = " Welcome, to FloraFriends! ";
  const sub_mssg = " Connect - Share - Grow ";

  return (
    <>
      <WelcomeMessage>
        <WelcomeMessageText> {wel_mssg}</WelcomeMessageText>
        <SubMessageText>{sub_mssg}</SubMessageText>
      </WelcomeMessage>
      
      <Grid columns={2} style={{ justifyContent: "center", padding: "4%" }}>
        <GridColumn width={10}>
          <Grid columns={2}>
            <ImageGroup size="medium" style={{ margin: "5%" }}>
              <GridColumn width={8}>
                <Image
                  src={red_secret}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Image
                  src={parlor_palm}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </GridColumn>
              <GridColumn width={8}>
                <Image
                  src={mini_monstera}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Image
                  src={snake_plant}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </GridColumn>
            </ImageGroup>
          </Grid>
        </GridColumn>

        <GridColumn width={6}>
          <Grid columns={1} style={{ justifyContent: "center" }}>
            <GridColumn style={{ margin: "2%" }}>
              <LoginForm>
                {hasAccount ? <Login hasAccount={hasAccount} handleChange={setHasAccount} updateUser={updateUser} /> : <CreateAccount hasAccount={hasAccount} handleChange={setHasAccount} updateUser={updateUser}/>}
              </LoginForm>
            </GridColumn>
          </Grid>
        </GridColumn>
      </Grid>
    </>
  );
}

export default Authenticate;
