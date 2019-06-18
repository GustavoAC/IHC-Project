import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "react-sidebar";
import Home from "./screens/home";
import Signup from "./screens/register";
import Login from "./screens/login";
import Navbar from "./components/Navbar";
import AttendanceList from "./screens/attendanceList";
import MyAttendances from "./screens/myAttendances";
import Attendance from "./screens/attendance";
import RegisterAttendance from "./screens/registerAttendance";
import Notificacoes from "./screens/notificacoes";
import Calendar from "./screens/calendar";
import Div from "./components/Div";

const styles = {
  toolbarLink: {
    padding: "10px 20px",
    borderBottom: "1px solid black",
    textDecoration: "none",
    color: "black"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false
    };
  }

  sidebarContent = (
    <Div style={{ flexDirection: "column" }}>
      <Div
        style={{
          margin: "0px 0px 0px 10px",
          height: "81px",
          cursor: "pointer",
          alignItems: "center"
        }}
        onClick={this.toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Div>
      <div style={{ width: "100%", height: "1px", backgroundColor: "black" }} />
      <a href="/" style={styles.toolbarLink}>
        Mapa de atendimentos
      </a>
      <a href="/atendimentos" style={styles.toolbarLink}>
        Listagem de Atendimentos
      </a>
      <a href="/meus_atendimentos" style={styles.toolbarLink}>
        Meus Atendimentos
      </a>
      <a href="/agenda" style={styles.toolbarLink}>
        Agenda
      </a>
      <a href="/cadastrar_ponto" style={styles.toolbarLink}>
        Cadastrar Ponto de Atendimento
      </a>
      <a href="/notificacoes" style={styles.toolbarLink}>
        Notifique-me no futuro
      </a>
    </Div>
  );

  toggleSidebar = () => {
    this.setState(prevState => ({
      ...prevState,
      sidebarOpen: !prevState.sidebarOpen
    }));
  };

  render() {
    return (
      <Sidebar
        sidebar={this.sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.toggleSidebar}
        styles={{ sidebar: { background: "white" } }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Navbar sidebarToggle={this.toggleSidebar} />
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/atendimentos" exact component={AttendanceList} />
            <Route
              path="/atendimentos/:attendanceSlug"
              component={Attendance}
            />
            <Route path="/meus_atendimentos" component={MyAttendances} />
            <Route path="/cadastrar_ponto" component={RegisterAttendance} />
            <Route
              path="/editar_ponto"
              render={props => <RegisterAttendance isEdit />}
            />
            <Route path="/notificacoes" component={Notificacoes} />
            <Route path="/agenda" component={Calendar} />
          </Router>
        </div>
      </Sidebar>
    );
  }
}

export default App;
