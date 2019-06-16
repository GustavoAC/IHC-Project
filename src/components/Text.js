/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../assets/resources/colors";

import LoadingGradient from "./LoadingGradient";

const Text = ({
  children,
  toCenter,
  color,
  background,
  icon,
  iconColor,
  fontSize,
  fontWeight,
  placeholderEnabled,
  minPlaceholderWidth,
  style
}) => {
  const defaultStyle = {
    color,
    background,
    fontSize,
    fontWeight
  };

  if (toCenter) {
    defaultStyle.textAlign = "center";
  }

  const iconItem = icon ? (
    <FontAwesomeIcon
      icon={icon}
      color={iconColor}
      style={{ paddingRight: "10px" }}
    />
  ) : null;

  let content;
  let extraStyle = {};
  if (placeholderEnabled && children === undefined) {
    const width = 30 + Math.random() * 30;
    content = <LoadingGradient size={fontSize} />;
    extraStyle = {
      width: `${width}%`,
      display: "flex",
      minWidth: minPlaceholderWidth,
      alignItems: "center"
    };
  } else {
    content = children;
  }

  return (
    <span style={{ ...defaultStyle, ...extraStyle, ...style }}>
      {iconItem}
      {content}
    </span>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.any,
  iconColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node,
  toCenter: PropTypes.bool,
  placeholderEnabled: PropTypes.bool,
  minPlaceholderWidth: PropTypes.string
};

Text.defaultProps = {
  color: colors.black,
  background: null,
  icon: null,
  iconColor: null,
  fontSize: "16px",
  fontWeight: null,
  toCenter: false,
  children: undefined,
  placeholderEnabled: false,
  minPlaceholderWidth: null
};

export default Text;
