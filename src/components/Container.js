import React from "react";
import PropTypes from "prop-types";

import "../assets/stylesheets/app.css";

const Container = ({ children, toCenter }) => {
  let style = {};
  if (toCenter) {
    style = { display: "flex", justifyContent: "center" };
  }
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
  toCenter: PropTypes.bool
};

Container.defaultProps = {
  toCenter: false
};

export default Container;
