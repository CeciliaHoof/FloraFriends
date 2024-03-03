import userImgPlaceholder from '../assets/user_img_placeholder.jpg';
import { Item } from 'semantic-ui-react';

function UserRow({ user }){
    const { username, purchased_plants } = user;

    const user_plant_cares = []

    for (let i=0; i < purchased_plants.length; i++) {
        for (let x=0; x<purchased_plants[i].plant_cares.length; x++){
            user_plant_cares.push(purchased_plants[i].plant_cares[x])
        }
    }
    
    
    return (
        <Item >
            <Item.Image src = {userImgPlaceholder} alt = 'user_image' size='mini'/>
            <Item.Content>
                <Item.Header>{username}</Item.Header>
                <Item.Meta> 
                    <span>🌱 {purchased_plants.length} </span>
                    <span>❤️ {user_plant_cares.length} </span>
                </Item.Meta>

            </Item.Content>
        </Item>
    )
}

export default UserRow


