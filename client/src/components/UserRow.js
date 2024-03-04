import userImgPlaceholder from '../assets/user_img_placeholder.jpg';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function UserRow({ user, num_plant_cares }){
    const { id, username, purchased_plants } = user;
    
    return (
        <Item >
            <Item.Image src = {userImgPlaceholder} alt = 'user_image' size='mini'/>
            <Item.Content>
                <Item.Header>{username}</Item.Header>
                <Item.Meta> 
                    <span>🌱 {purchased_plants.length} </span>
                    <span>❤️ {num_plant_cares} </span>
                    <Link to={`/profile/${id}`}>View profile</Link>
                </Item.Meta>

            </Item.Content>
        </Item>
    )
}

export default UserRow


