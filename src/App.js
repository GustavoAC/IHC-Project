import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/home";
import Signup from "./screens/register";
import Login from "./screens/login";
import Navbar from "./components/Navbar";
import AttendanceList from "./screens/attendanceList";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/atendimentos" component={AttendanceList} />
      </Router>
    </div>
  );
}

export default App;
