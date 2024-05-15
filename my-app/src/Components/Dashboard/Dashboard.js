import {
  Typography,
  Grid,
  Box,
  Tabs,
  Tab,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import SpeakerIcon from "../../Assests/Icons/Speaker.png";
import LoadingIcon from "../../Assests/Icons/Loading.png";
import NextIcon from "../../Assests/Icons/Next.png";
import PhoneIcon from "../../Assests/Icons/Phone.png";
import TickIcon from "../../Assests/Icons/Tick.png";
import React from "react";
import "./Dashboard.css";
import SearchBar from "material-ui-search-bar";

function TokenManagementDashboard(props) {
  const { validUser, setValidUser, deskNo, setDeskNo } = props;

  function createData(bed, token, ring, next, success, loading) {
    return { bed, token, ring, next, success, loading };
  }

  const newPatients = [
    createData(true, "1002", 1, 1, 1, 1),
    createData(true, "1003", 1, 1, 1, 1),
    createData(false, "1004", 1, 1, 1, 1),
    createData(true, "1007", 1, 1, 1, 0),
    createData(false, "1008", 1, 1, 1, 0),
    createData(false, "1009", 0, 0, 0, 0),
  ];

  const existingPatients = [
    createData(true, "1001", 1, 1, 1, 1),
    createData(false, "1009", 1, 1, 1, 1),
    createData(true, "1005", 1, 1, 1, 1),
    createData(false, "1006", 0, 1, 1, 1),
  ];

  const specialPatients = [
    createData(true, "100(PG)", 1, 1, 1, 1),
    createData(false, "101(PC)", 1, 1, 1, 1),
    createData(false, "102(SC)", 1, 1, 1, 1),
    createData(false, "103(Other)", 0, 1, 1, 1),
  ];
  return (
    <div className="dashboardContainer">
      {/* <Header/> */}
      <div className="topBar">
        <div className="dashboardHeading">
          <Typography variant="h5">Token Queue Manangement&nbsp;</Typography>
          <Typography variant="h7"> ( Desk No-{deskNo} )</Typography>
        </div>
        <div className="searchBox">
          <SearchBar
            onChange={() => console.log("setSearchValue")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="gridContainer">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box bgcolor={"#ffffff"}>
              <div className="tableHeading">
                <Typography className="tableName">New Patient</Typography>
                <div className="tableCount">
                  <Typography>Total&nbsp;</Typography>
                  <Typography className="count">286</Typography>
                </div>
              </div>
              <div className="tabsContainer">
                <Tabs
                  value={"all"}
                  onChange={() => {}}
                  className="tabs"
                  minWidth="0px"
                  style={{ marginLeft: "25px" }}
                >
                  <Tab
                    value="all"
                    label="All"
                    style={{ minWidth: "0px", fontWeight: "700" }}
                  />
                  <Tab
                    value="142"
                    label="142"
                    style={{
                      minWidth: "0px",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  />
                  <Tab
                    value="56"
                    label="56"
                    style={{ minWidth: "0px", color: "#f46524" }}
                  />
                  <Tab
                    value="88"
                    label="88"
                    style={{ minWidth: "0px", color: "lightslategray" }}
                  />
                </Tabs>
                <div className="filterList">
                  <Typography className="filterLabel">
                    {/* <img src={Circle} alt={"Circle"} /> */}
                    &#8226; Unattended &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Skipped &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Completed &nbsp;
                  </Typography>
                </div>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    {newPatients.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {row.bed && <img src={PhoneIcon} alt="phoneIcon" />}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={
                            row.bed
                              ? { fontWeight: 700, color: "#f46524" }
                              : { fontWeight: 700, color: "#000000" }
                          }
                        >
                          {row.token}
                        </TableCell>
                        <TableCell align="right">
                          {row.ring === 1 && (
                            <img src={SpeakerIcon} alt="speakerIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.next === 1 && (
                            <img src={NextIcon} alt="snextIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.success === 1 && (
                            <img src={TickIcon} alt="tickIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.loading === 1 && (
                            <img src={LoadingIcon} alt="loadingIcon" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box bgcolor={"#ffffff"}>
              <div className="tableHeading">
                <Typography className="tableName">Existing Patient</Typography>
                <div className="tableCount">
                  <Typography>Total&nbsp;</Typography>
                  <Typography className="count">286</Typography>
                </div>
              </div>
              <div className="tabsContainer">
                <Tabs
                  value={"all"}
                  onChange={() => {}}
                  className="tabs"
                  minWidth="0px"
                  style={{ marginLeft: "25px" }}
                >
                  <Tab
                    value="all"
                    label="All"
                    style={{ minWidth: "0px", fontWeight: "700" }}
                  />
                  <Tab
                    value="142"
                    label="142"
                    style={{
                      minWidth: "0px",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  />
                  <Tab
                    value="56"
                    label="56"
                    style={{ minWidth: "0px", color: "#f46524" }}
                  />
                  <Tab
                    value="88"
                    label="88"
                    style={{ minWidth: "0px", color: "lightslategray" }}
                  />
                </Tabs>
                <div className="filterList">
                  <Typography className="filterLabel">
                    {/* <img src={Circle} alt={"Circle"} /> */}
                    &#8226; Unattended &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Skipped &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Completed &nbsp;
                  </Typography>
                </div>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    {existingPatients.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {row.bed && <img src={PhoneIcon} alt="phoneIcon" />}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={
                            row.bed
                              ? { fontWeight: 700, color: "#f46524" }
                              : { fontWeight: 700, color: "#000000" }
                          }
                        >
                          {row.token}
                        </TableCell>
                        <TableCell align="right">
                          {row.ring === 1 && (
                            <img src={SpeakerIcon} alt="speakerIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.next === 1 && (
                            <img src={NextIcon} alt="snextIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.success === 1 && (
                            <img src={TickIcon} alt="tickIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.loading === 1 && (
                            <img src={LoadingIcon} alt="loadingIcon" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box bgcolor={"#ffffff"}>
              <div className="tableHeadingSpecialPatients">
                <Typography className="tableName">
                  Patient with special needs
                </Typography>
                <div className="dropdown">
                  <FormControl fullWidth>
                    <Select
                      labelId="patients-select-label"
                      id="patients-no-select"
                      value={"All"}
                      label="filter special patients"
                      onChange={() => {}}
                      className="specialPatientsDropdown"
                    >
                      <MenuItem key={"All"} value={"All"}>
                        All
                      </MenuItem>
                      <MenuItem key={"PG"} value={"PG"}>
                        PG
                      </MenuItem>
                      <MenuItem key={"Others"} value={"Others"}>
                        Other
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="tableChipsHeading">
                <div className="filterChips">
                  <Typography className="filterChipNew">
                    New
                    <div>86</div>
                  </Typography>
                  <Typography className="filterChipExisting">
                    Existing <div>200</div>
                  </Typography>
                </div>
                <div className="tableCount">
                  <Typography>Total&nbsp;</Typography>
                  <Typography className="count">286</Typography>
                </div>
              </div>
              <div className="tabsContainer">
                <Tabs
                  value={"all"}
                  onChange={() => {}}
                  className="tabs"
                  minWidth="0px"
                  style={{ marginLeft: "25px" }}
                >
                  <Tab
                    value="all"
                    label="All"
                    style={{ minWidth: "0px", fontWeight: "700" }}
                  />
                  <Tab
                    value="142"
                    label="142"
                    style={{
                      minWidth: "0px",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  />
                  <Tab
                    value="56"
                    label="56"
                    style={{ minWidth: "0px", color: "#f46524" }}
                  />
                  <Tab
                    value="88"
                    label="88"
                    style={{ minWidth: "0px", color: "lightslategray" }}
                  />
                </Tabs>
                <div className="filterList">
                  <Typography className="filterLabel">
                    {/* <img src={Circle} alt={"Circle"} /> */}
                    &#8226; Unattended &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Skipped &nbsp;
                  </Typography>
                  <Typography className="filterLabel">
                    &#8226; Completed &nbsp;
                  </Typography>
                </div>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    {specialPatients.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {row.bed && <img src={PhoneIcon} alt="phoneIcon" />}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={
                            row.bed
                              ? { fontWeight: 700, color: "#f46524" }
                              : { fontWeight: 700, color: "#000000" }
                          }
                        >
                          {row.token}
                        </TableCell>
                        <TableCell align="right">
                          {row.ring === 1 && (
                            <img src={SpeakerIcon} alt="speakerIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.next === 1 && (
                            <img src={NextIcon} alt="snextIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.success === 1 && (
                            <img src={TickIcon} alt="tickIcon" />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {row.loading === 1 && (
                            <img src={LoadingIcon} alt="loadingIcon" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default TokenManagementDashboard;
