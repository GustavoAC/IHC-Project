import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Div from "./Div";
import Button from "./Button";
import colors from "../assets/resources/colors";
import Text from "./Text";

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: "10px 0px",
    borderBottom: "1px solid black"
  },

  headerDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    padding: "0px 10px",
    minHeight: "60px",
    width: "calc(100% - 20px)"
  },

  logoContainer: {
    width: "220px",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logoContainerMobile: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    marginLeft: "5%",
    width: "100%",
    height: "auto"
  },

  button: {
    position: "relative",
    outline: "none"
  }
};

class Navbar extends PureComponent {
  renderBars() {
    return (
      <Div
        style={{
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px 0px 0px 5px"
        }}
        onClick={this.props.sidebarToggle}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Div>
    );
  }

  renderAuthenticated() {
    const loggedUserName = "Usuário logado";

    return (
      <Div style={{ ...styles.headerDiv }}>
        {this.renderBars()}
        <Div>
          <Text>{loggedUserName}</Text>
        </Div>
      </Div>
    );
  }

  renderUnauthenticated() {
    return (
      <Div style={{ ...styles.headerDiv }}>
        {this.renderBars()}
        <Div>
          <Div style={{ margin: "0px 5px" }}>
            <Button type="white" text="Login" href="/login" />
          </Div>
          <Div style={{ margin: "0px 5px" }}>
            <Button type="white" text="Registrar" href="/signup" />
          </Div>
        </Div>
      </Div>
    );
  }

  render() {
    const { logged } = this.props;
    return (
      <nav style={styles.header}>
        {logged ? this.renderAuthenticated() : this.renderUnauthenticated()}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logged: PropTypes.bool
};

Navbar.defaultProps = {
  logged: false
};

export default Navbar;
