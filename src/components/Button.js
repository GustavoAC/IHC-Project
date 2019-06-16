import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../assets/resources/colors";

const styles = {
  baseLink: {
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: "4px",
    border: "none",
    fontSize: "15px",
    minHeight: "40px",
    minWidth: "100px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  base: {
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: "4px",
    border: "none",
    fontSize: "15px",
    minHeight: "40px",
    minWidth: "100px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    outline: "none"
  },

  black: {
    backgroundColor: colors.transparent,
    color: colors.white,
    padding: "1px 6px"
  },

  blackSecondary: {
    backgroundColor: colors.transparent,
    color: colors.gray,
    margin: "5px"
  },

  green: {
    backgroundColor: colors.green,
    color: colors.white
  },

  blackBanner: {
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: "14px",
    height: "60px",
    minWidth: "220px"
  },

  transparent: {
    backgroundColor: colors.graybg,
    color: colors.red
  },

  transparentBorder: {
    backgroundColor: colors.transparent,
    color: colors.red,
    marginLeft: "20px",
    border: `1px solid ${colors.red}`
  },

  disabled: {
    backgroundColor: colors.graybg,
    color: colors.gray,
    cursor: "not-allowed"
  },

  pickerUnselected: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.black}`,
    color: colors.black,
    margin: "5px"
  },

  pickerSelected: {
    backgroundColor: colors.black,
    border: `1px solid ${colors.black}`,
    color: colors.white,
    margin: "5px"
  },

  flat: {
    width: "100%"
  },

  mediumHeight: {
    padding: "10px 0"
  },

  mediumWidth: {
    padding: "0 10px"
  },

  large: {
    padding: "20px"
  },

  short: {
    width: "150px"
  },

  likeButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth: "65px",
    justifyContent: "space-between",
    backgroundColor: colors.transparent,
    border: "1px solid"
  },

  unliked: {
    borderColor: colors.black,
    color: colors.black
  },

  liked: {
    borderColor: colors.red,
    color: colors.red
  },

  facebook: {
    color: colors.white,
    backgroundColor: "#4267b2",
    borderColor: "rgba(0,0,0,0.2)",
    height: "50px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px"
  },
  inlineLink: {
    minWidth: "auto"
  },
  paymentOption: {
    padding: "30px",
    border: "1px solid black",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px",
    minWidth: "10%",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  baseFilter: {
    marginLeft: "20px"
  },
  verticalMargin: {
    margin: "10px 0"
  },
  centerText: {
    textAlign: "center"
  },
  white: {
    backgroundColor: colors.transparent,
    color: colors.black,
    border: "1px solid black",
    height: '40px',
  }
};

const Button = ({ text, type, onClick, icon, href }) => {
  const style = [href ? styles.baseLink : styles.base];
  if (Array.isArray(type)) {
    type.forEach(t => {
      style.push(styles[t]);
    });
  } else {
    style.push(styles[type]);
  }

  const iconItem = icon ? (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: "30px", paddingRight: "5%" }}
    />
  ) : null;

  if (href) {
    return (
      <a style={style} href={href}>
        {iconItem}
        {text}
      </a>
    );
  }
  return (
    <button type="button" style={style} onClick={onClick}>
      {iconItem}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.any,
  href: PropTypes.string
};

Button.defaultProps = {
  icon: null,
  href: undefined,
  onClick: () => {}
};

export default Radium(Button);
