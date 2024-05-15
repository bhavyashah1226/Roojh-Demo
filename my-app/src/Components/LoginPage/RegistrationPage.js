import "./RegistrationPage.css";
import React, { useState } from "react";
import cx from "classnames";
import aabhaLogo from "../../Icons/AabhaSS.png";
import { Radio } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "@material-ui/core/Snackbar";

function LoginPage(props) {
  const { validUser, setValidUser, deskNo, setDeskNo } = props;
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleDeskNoChange = (e) => {
    setDeskNo(e.target.value);
    if (e.target.value !== 3) {
      setSnackbarOpen(true);
    } else {
      //Make user valid assuming password and username is also correct for demo
      setValidUser(true);
    }
  };

  const desk_no = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="loginContainer">
        <div className="heading">
          <div className="headText">
            <div className="poweredBy"> Powered By </div>
            <div className="roojh"> Roojh </div>
          </div>
          <img src={aabhaLogo} className="aabhaLogo" alt="aabhaLogo" />
        </div>
        <div className="welcomeContainer">
          <div className="welcomeText">Welcome!</div>
          <div className="supportingText">Login to get started</div>
        </div>
        <div className="userTypeContainer">
          <FormLabel id="userTypeLabel" className="userTypeLabel">
            Select User Type:
          </FormLabel>
          <RadioGroup row className="userTypeLabelRadioGroup">
            <FormControlLabel
              className={cx("radioLabel", {
                ["radioLabelSelected"]: userType === "admin",
              })}
              value="admin"
              control={
                <Radio
                  checked={userType === "admin"}
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  value="admin"
                  className={cx("radioButton", {
                    ["radioButtonSelected"]: userType === "admin",
                  })}
                />
              }
              label="Admin"
            />

            <FormControlLabel
              className={cx("radioLabel", {
                ["radioLabelSelected"]: userType === "registration_desk",
              })}
              value="registration_desk"
              control={
                <Radio
                  checked={userType === "registration_desk"}
                  onChange={(e) => {
                    setDeskNo("");
                    setUserType(e.target.value);
                  }}
                  value="registration_desk"
                  className={cx("radioButton", {
                    ["radioButtonSelected"]: userType === "registration_desk",
                  })}
                />
              }
              label="Registration Deck"
            />

            <FormControlLabel
              className={cx("radioLabel", {
                ["radioLabelSelected"]: userType === "token_desk",
              })}
              value="token_desk"
              control={
                <Radio
                  checked={userType === "token_desk"}
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  value="token_desk"
                  className={cx("radioButton", {
                    ["radioButtonSelected"]: userType === "token_desk",
                  })}
                />
              }
              label="Token Desk"
            />
          </RadioGroup>
          {userType === "registration_desk" && (
            <>
              <FormLabel id="deskNoLabel" className="deskNoLabel">
                Desk No:
              </FormLabel>

              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="dropdownLabel"
                >
                  Enter the Desk No
                </InputLabel>
                <Select
                  labelId="desk-no-select-label"
                  id="desk-no-select"
                  value={deskNo}
                  label="Desk No"
                  onChange={handleDeskNoChange}
                  className="deskNoDropdown"
                >
                  <MenuItem disabled value="">
                    <em>Enter the Desk No</em>
                  </MenuItem>
                  {desk_no.map((deskNo) => (
                    <MenuItem key={deskNo} value={deskNo}>
                      {deskNo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={() => {
                  setSnackbarOpen(false);
                }}
                message="Enter Valid Desk No"
              />
            </>
          )}
        </div>
        <Divider className="divider" />
        <div className="loginFormContainer">
          <FormLabel
            id="loginLabel"
            className="loginLabel"
            labelPlacement="start"
          >
            Login:
          </FormLabel>
          <TextField
            id="outlined-basic"
            placeholder="Mobile No or Username"
            variant="outlined"
            className="username"
          />
          <TextField
            id="outlined-basic"
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            className="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            className="loginBtn"
            onClick={() => {
              alert("clicked");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
