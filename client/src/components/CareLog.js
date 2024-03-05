import React from "react";
import { Feed, Segment } from "semantic-ui-react";
import PlantCare from "./PlantCare";

function CareLog({ cares, height }) {

    const caresDisplay = cares
    .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA
    })
    .map(care => (
        <PlantCare care={care} key={care.id} />
    ))

    return (
        <Segment style={{ height: height, overflowY: "auto" }}>
            <Feed>
                {caresDisplay}
            </Feed>
        </Segment>
    );
}

export default CareLog;
