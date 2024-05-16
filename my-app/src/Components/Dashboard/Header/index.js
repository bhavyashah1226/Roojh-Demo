import "./header.css";
import {
  Avatar,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import HospitalIcon from "@mui/icons-material/LocalHospital";

function Header(props) {
  //User info to be shown can be taken from props or from API as an object and displayed here
  return (
    <div className="headerContainer">
      <div className="userDetailsContainer">
        <Avatar className="avatar">AG</Avatar>
        <div className="userDetails">
          <Typography className="username">Ankita Gupta</Typography>
          <Typography className="details">
            Female | 28Y | Registration Desk Personnel | Desk No 3 |
          </Typography>
        </div>
      </div>
      <div className="hospitalDropdown">
        <FormControl fullWidth>
          <Select
            labelId="hospital-select-label"
            id="hospital-select"
            value={"AllA Hospital"}
            label="hospital select"
            onChange={() => {}}
          >
            <MenuItem key={"AllA_Hospital"} value={"AllA Hospital"}>
              <Avatar className="avatar">
                <HospitalIcon />
              </Avatar>
              AllA Hospital
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="userDropdown">
        <FormControl fullWidth>
          <Select
            labelId="user-select-label"
            id="user-select"
            value={"Ankita Gupta"}
            label="user select"
            onChange={() => {}}
          >
            <MenuItem key={"Ankita_Gupta"} value={"Ankita Gupta"}>
              <Avatar className="avatar">AG</Avatar>
              Ankita Gupta
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
export default Header;
