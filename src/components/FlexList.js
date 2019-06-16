import React from "react";
import PropTypes from "prop-types";
import Div from "./Div";
import colors from "../assets/resources/colors";
import LoadingCircle from "./LoadingCircle";

const FlexList = ({
  data,
  render,
  justifyContent,
  placeholderCount,
  placeholderOverlay,
  isMobile
}) => {
  const style = {
    placeContent: isMobile ? "center" : "space-between",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  let renderedData;
  if (!data && placeholderCount) {
    renderedData = [];
    for (let i = 0; i < placeholderCount; i += 1)
      renderedData.push(render({}, i));
  } else {
    renderedData = data.map((item, index) => render(item, index));
  }

  return (
    <Div
      style={{
        ...style,
        justifyContent,
        position: "relative",
        width: "100%"
      }}
    >
      {placeholderOverlay && !data && (
        <Div
          style={{
            backgroundColor: colors.graytransparent,
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            zIndex: "5"
          }}
        >
          <Div style={{ paddingTop: "100px" }}>
            <LoadingCircle />
          </Div>
        </Div>
      )}
      {renderedData}
    </Div>
  );
};

FlexList.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func.isRequired,
  justifyContent: PropTypes.string,
  placeholderCount: PropTypes.number,
  placeholderOverlay: PropTypes.bool,
  isMobile: PropTypes.bool
};

FlexList.defaultProps = {
  data: undefined,
  justifyContent: "space-between",
  placeholderCount: 0,
  placeholderOverlay: false,
  isMobile: false
};

export default FlexList;
