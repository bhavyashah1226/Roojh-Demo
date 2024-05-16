import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import LoginPage from "../LoginPage/RegistrationPage.js";
import TokenManagementDashboard from "../Dashboard/Dashboard.js";
function App() {
  const [validUser, setValidUser] = useState(false);
  const [deskNo, setDeskNo] = useState("");
  return !validUser ? (
    <Container maxWidth="sm">
      <LoginPage
        validUser={validUser}
        setValidUser={setValidUser}
        deskNo={deskNo}
        setDeskNo={setDeskNo}
      />
    </Container>
  ) : (
    <TokenManagementDashboard
      validUser={validUser}
      setValidUser={setValidUser}
      deskNo={deskNo}
      setDeskNo={setDeskNo}
    />
  );
}
export default App;
