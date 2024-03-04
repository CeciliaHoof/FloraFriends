import userImgPlaceholder from "../assets/user_img_placeholder.jpg";
import { Feed } from "semantic-ui-react"

function PlantCare({care}){
    const {user, date, type_care, purchased_plant } = care
    console.log(purchased_plant.plant.common_name)
    return (
        <Feed.Event>
            <Feed.Label>
                ❤️
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{user.username}</Feed.User> {type_care} their {purchased_plant.plant.common_name}
                    <Feed.Date>{date}</Feed.Date>
                </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
    )
}
export default PlantCare