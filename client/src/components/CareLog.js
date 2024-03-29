import React from "react";
import { Feed, Segment } from "semantic-ui-react";
import PlantCare from "./PlantCare";

function CareLog({
  cares,
  height,
  loggedInUser,
  purchasedPlants,
  onDeleteCare,
}) {
  if (cares.error){
    return <h1>Loading</h1>
  }

  const caresDisplay = cares
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    })
    .map((care) => (
      <PlantCare
        care={care}
        loggedInUser={loggedInUser}
        purchasedPlants={purchasedPlants}
        onDeleteCare={onDeleteCare}
        key={care.id}
      />
    ));

  return (
    <Segment style={{ height: height, overflowY: "auto" }}>
      <Feed>{caresDisplay}</Feed>
    </Segment>
  );
}

export default CareLog;
