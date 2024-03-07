import userImgPlaceholder from "../assets/user_img_placeholder.jpg";
import { Image } from "semantic-ui-react";
import styled from "styled-components";



const StyledSpan = styled.span`
    background-color : #F8F8F8;
`
function UserDetails({ user }) {
  const { username, purchased_plants, plant_cares } = user;

  return (
    <>
        <Image
          src={userImgPlaceholder}
          alt="placeholder"
          size="small"
          floated="left"
          wrapped
        />
        <h3>{username}</h3>
        <StyledSpan>
            <span>{ purchased_plants ? ` 🌱 ${purchased_plants.length} ` : 'loading...'}</span>
            <span>❤️{ plant_cares ? `  ${plant_cares.length} ` : 'loading...'}  </span>
         </StyledSpan>
        {/* <span>❤️ {plant_cares} </span> */}
        <p>
          <strong>Bio:</strong>
        </p>
    </>
  );
}

export default UserDetails;
