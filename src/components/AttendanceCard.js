import React from "react";
import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Div from "./Div";
import Text from "./Text";
import Button from "./Button";

const AttendanceCard = ({ name, url, location, hour }) => {
  return (
    <Div
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: "10px",
        justifyContent: "space-between",
        width: "100%"
      }}
    >
      <Div style={{ flexDirection: "column" }}>
        <Text fontWeight="bold" fontSize="20px">
          {name}
        </Text>
        <Text icon={faClock}>{hour}</Text>
        <Text icon={faMapMarker}>{location}</Text>
      </Div>
      <Div style={{ alignItems: "center" }}>
        <Button type="green" text="Ver mais" href={url} />
      </Div>
    </Div>
  );
};

export default AttendanceCard;
