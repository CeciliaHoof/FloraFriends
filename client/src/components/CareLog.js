import React from "react";
import { Feed, Segment } from "semantic-ui-react";
import PlantCare from "./PlantCare";

function CareLog({ cares }) {
    console.log(cares);
    const caresDisplay = cares.map(care => (
        <PlantCare care={care} key={care.id} />
    ))
    return (
        <Segment style={{ height: "500px", overflowY: "auto" }}>
            <Feed>
                {caresDisplay}
            </Feed>
        </Segment>
    );
}

export default CareLog;
