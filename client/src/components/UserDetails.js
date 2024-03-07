import userImgPlaceholder from "../assets/user_img_placeholder.jpg";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";



const StyledSpan = styled.span`
    background-color : #F8F8F8;
`
function UserDetails({ user }) {
  const { username, purchased_plants, plant_cares, bio } = user;

  return (
    <Card>
      <Card.Content>
        <Image
          src={userImgPlaceholder}
          alt="placeholder"
          size="small"
          floated="left"
          wrapped
        />
        
          <Card.Header>{username}</Card.Header>
          <Card.Meta>
          <StyledSpan>
              <span>{ purchased_plants ? ` 🌱 ${purchased_plants.length} ` : 'loading...'}</span>
              <span>❤️{ plant_cares ? `  ${plant_cares.length} ` : 'loading...'}  </span>
          </StyledSpan>
          </Card.Meta>
          <Card.Description>
            <strong>About Me: </strong>{bio}
          </Card.Description>
        </Card.Content>
    </Card>
  );
}

export default UserDetails;
