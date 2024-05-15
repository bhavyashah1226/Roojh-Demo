import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import LoginPage from "../LoginPage/RegistrationPage.js";
import TokenManagementDashboard from "../Dashboard/Dashboard.js";
function App() {
  const [validUser, setValidUser] = useState(false);
  const [deskNo, setDeskNo] = useState("");
  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <LoginPage
          validUser={validUser}
          setValidUser={setValidUser}
          deskNo={deskNo}
          setDeskNo={setDeskNo}
        />
        <TokenManagementDashboard
          validUser={validUser}
          setValidUser={setValidUser}
          deskNo={deskNo}
          setDeskNo={setDeskNo}
        />
      </Paper>
    </Container>
  );
}
export default App;
