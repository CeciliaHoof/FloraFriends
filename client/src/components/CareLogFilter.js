import { Dropdown } from "semantic-ui-react";

function CareLogFilter({ plants, users, onPlantSelect, onUserSearch }) {
  const plantOptions = plants.map((plant) => {
    return { key: plant, value: plant, text: plant };
  });

  const userOptions = users.map(user => {
    return {key: user, value: user, text:user}
  })
  return (
    <>
      <h3>Filter Plant Care</h3>
      <Dropdown
        placeholder="Select Plant"
        fluid
        search
        selection
        clearable
        options={plantOptions}
        onChange={(e, { value }) => onPlantSelect(value)}
      />
      <br></br>
      <Dropdown
        placeholder="Select User"
        fluid
        search
        selection
        clearable
        options={userOptions}
        onChange={(e, { value }) => onUserSearch(value)}
      />
    </>
  );
}

export default CareLogFilter;
