import React from "react";
import Div from "./Div";
import Text from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CategoryCard = ({ name, isChecked, onClick }) => {
  return (
    <Div
      style={{
        cursor: "pointer",
        borderRadius: "4px",
        border: "solid 1px black",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        margin: "10px",
        backgroundColor: "white"
      }}
      onClick={onClick}
    >
      <Div>
        <Text fontSize="28px">{name}</Text>
      </Div>
      {isChecked && <FontAwesomeIcon icon={faCheck} size="2x" />}
    </Div>
  );
};

export default CategoryCard;
