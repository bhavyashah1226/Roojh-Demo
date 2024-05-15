import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import LoginPage from "../LoginPage/RegistrationPage.js";
import TokenManagementDashboard from "../Dashboard/Dashboard.js";
function App() {
  const [validUser, setValidUser] = useState(false);
  const [deskNo, setDeskNo] = useState("");
  return (
    <>
      <Container maxWidth="sm" className="App">
        {!validUser && (
          <LoginPage
            validUser={validUser}
            setValidUser={setValidUser}
            deskNo={deskNo}
            setDeskNo={setDeskNo}
          />
        )}
      </Container>
      <Box my={4} display="flex" alignItems="center" p={2} bgcolor={"#f0f0f0"}>
        {validUser && (
          <TokenManagementDashboard
            validUser={validUser}
            setValidUser={setValidUser}
            deskNo={deskNo}
            setDeskNo={setDeskNo}
          />
        )}
      </Box>
    </>
  );
}
export default App;
