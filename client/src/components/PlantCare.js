import { useState } from "react";
import { Feed, Icon, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import PlantCareEdit from "./PlantCareEdit";

function PlantCare({ care, loggedInUser, purchasedPlants, onDeleteCare }) {
  const [careDis, setCareDis] = useState(care);
  const { user, date, type_care, purchased_plant, comment } = careDis;

  const parsedDate = new Date(date);

  const formattedDate =
    DateTime.fromJSDate(parsedDate).toFormat("dd-MM-yyyy HH:mm z");

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleNotEditClick() {
    setIsEditing(false);
  }

  if (!purchased_plant) {
    <h1>loading</h1>;
  }
  return (
    <Feed.Event>
      <Feed.Label>
        <Image
          src={purchased_plant.plant.image}
          alt={purchased_plant.plant.common_name}
          wrapped
        />
      </Feed.Label>
      {!isEditing ? (
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{user.username}</Feed.User> {type_care} their{" "}
            {purchased_plant.plant.common_name}
            <Feed.Date>{formattedDate}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>{comment}</Feed.Extra>
          <Feed.Meta>
            {user.id === loggedInUser.id && !isEditing && (
              <Icon name="pencil" onClick={handleEditClick} />
            )}
          </Feed.Meta>
        </Feed.Content>
      ) : (
        <PlantCareEdit
          username={user.username}
          handleNotEditClick={handleNotEditClick}
          purchasedPlants={purchasedPlants}
          care={care}
          onCareEdit={setCareDis}
          onDeleteCare={onDeleteCare}
        />
      )}
    </Feed.Event>
  );
}
export default PlantCare;
