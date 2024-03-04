import { Feed, Image } from "semantic-ui-react"

function PlantCare({care}){
    const {user, date, type_care, purchased_plant, comment } = care
    
    const parsedDate = new Date(date);
    const formattedDate = `${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}-${parsedDate.getFullYear()}`;
    
    return (
        <Feed.Event>
            <Feed.Label>
                <Image src={purchased_plant.plant.image} alt={purchased_plant.plant.common_name} wrapped/>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{user.username}</Feed.User> {type_care} their {purchased_plant.plant.common_name}
                    <Feed.Date>{formattedDate}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    {comment}
                </Feed.Extra>
            </Feed.Content>
        </Feed.Event>
    )
}
export default PlantCare