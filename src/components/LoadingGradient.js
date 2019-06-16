import React from "react";
import PropTypes from "prop-types";
import colors from "../assets/resources/colors";
import "../assets/stylesheets/loading.element.css";

const LoadingGradient = ({ size, customStyle }) => (
  <div
    style={{
      flex: "1",
      background: colors.lightGray,
      height: size,
      overflow: "hidden",
      ...customStyle
    }}
  >
    <div className="animated-background" />
  </div>
);

LoadingGradient.propTypes = {
  size: PropTypes.string,
  customStyle: PropTypes.any
};

LoadingGradient.defaultProps = {
  size: "16px",
  customStyle: {}
};

export default LoadingGradient;
