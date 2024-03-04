import { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { Dropdown, Form, Header } from "semantic-ui-react";

const initialFormState = {
  plant: "",
  action: "",
  comment: "",
  date: null,
};

function PlantCareForm({purchasedPlants, onCareSubmit }) {
  const [formData, setFormData] = useState(initialFormState);

  if (!purchasedPlants) {
    return <h1>loading</h1>;
  }

  const careActions = ["watered", "fertilized", "pruned", "repotted"];
  const careOptions = careActions.map((action) => {
    return { key: action, value: action, text: action };
  });

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
    setFormData({ ...formData, [name]: value });
  }

  function handleDate(date) {
    setFormData({ ...formData, date: date._d });
  }

  function handleSubmit(e){
    e.preventDefault();
    const formattedDate = moment(formData.date).format("MM-DD-YYYY HH:mm:ss");
    fetch('/plant_cares',{
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            type_care: formData.action,
            comment: formData.comment,
            date: formattedDate,
            purchased_plant_id: formData.plant
        })
    })
        .then(resp => resp.json())
        .then(data => onCareSubmit(data))
    setFormData(initialFormState)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Header as='h3'>Add New Plant Care</Header>
      <Form.Field>
        <Dropdown
          placeholder="Select Plant"
          fluid
          search
          selection
          clearable
          name="plant"
          value={formData.plant}
          options={plantOptions}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Dropdown
          placeholder="Select Care Provided"
          fluid
          search
          selection
          clearable
          name="action"
          value={formData.action}
          options={careOptions}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Datetime
          inputProps={{
            placeholder: "Select Care Date",
          }}
          isValidDate={valid}
          value={formData.date}
          onChange={handleDate}
          dateFormat="MM-DD-YYYY"
        />
      </Form.Field>
      <Form.Field>
        <Form.TextArea
          placeholder="Provide care observations..."
          label="Care Comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Button>Submit Care</Form.Button>
      </Form.Field>
    </Form>
  );
}

export default PlantCareForm;
