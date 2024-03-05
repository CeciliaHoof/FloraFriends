import { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { Dropdown, Feed, Icon, Form } from "semantic-ui-react";

function PlantCareEdit({
  username,
  handleNotEditClick,
  purchasedPlants,
  care,
  onCareEdit,
  onDeleteCare,
}) {
  const [editedCare, setEditedCare] = useState({
    plant: care.purchased_plant_id,
    date: care.date,
    action: care.type_care,
    comment: care.comment,
  });

  const careActions = ["watered", "fertilized", "pruned", "repotted"];
  const careOptions = careActions.map((action) => {
    return { key: action, value: action, text: action };
  });

  if (!purchasedPlants) {
    console.log(<h1>Loading</h1>);
  }

  const plantOptions = purchasedPlants.map((purchasedPlant) => {
    return {
      key: purchasedPlant.id,
      value: purchasedPlant.id,
      text: purchasedPlant.plant.common_name,
    };
  });

  const today = moment();
  const valid = function (current) {
    return current.isBefore(today);
  };

  function handleChange(e, { value, name }) {
    setEditedCare({ ...editedCare, [name]: value });
  }

  function handleDate(date) {
    setEditedCare({ ...editedCare, date: date._d });
  }

  function handleSave() {
    const formattedDate = moment(editedCare.date).format("MM-DD-YYYY HH:mm:ss");
    fetch(`/plant_cares/${care.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        type_care: editedCare.action,
        comment: editedCare.comment,
        date: formattedDate,
        purchased_plant_id: editedCare.plant,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            onCareEdit(data);
          });
        } else {
          console.error("Failed to delete care");
        }
      })
      .catch((error) => {
        console.error("error while deleting care", error);
      });
    handleNotEditClick();
  }

  function handleDelete() {
    fetch(`/plant_cares/${care.id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {
            onDeleteCare(care);
        } else {
          console.error("Failed to delete care");
        }
      })
      .catch((error) => {
        console.error("error while deleting care", error);
      });
    handleNotEditClick();
  }

  return (
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{username}</Feed.User>
        <Dropdown
          fluid
          search
          selection
          clearable
          name="plant"
          value={editedCare.plant}
          options={plantOptions}
          onChange={handleChange}
        />{" "}
        their{" "}
        <Dropdown
          fluid
          search
          selection
          clearable
          name="action"
          value={editedCare.action}
          options={careOptions}
          onChange={handleChange}
        />
        <Feed.Date>
          <Datetime
            isValidDate={valid}
            value={editedCare.date}
            onChange={handleDate}
            dateFormat="MM-DD-YYYY"
          />
        </Feed.Date>
        <Feed.Extra>
          <Form.TextArea
            name="comment"
            value={editedCare.comment}
            onChange={handleChange}
          />
        </Feed.Extra>
      </Feed.Summary>
      <Feed.Meta>
        <Icon name="save" onClick={handleSave} />
        <Icon name="cancel" onClick={handleNotEditClick} />
        <Icon name="trash alternate outline" onClick={handleDelete} />
      </Feed.Meta>
    </Feed.Content>
  );
}

export default PlantCareEdit;
