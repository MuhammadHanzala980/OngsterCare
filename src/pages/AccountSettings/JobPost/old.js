import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import MediaCard from "../../../components/card";
import SimpleCard from "../../../components/simpleCard";
import StandardSelect from "../../../components/standardSelect";
import { Header } from "../../../components/header2";
import { Footer } from "../../../components/footer";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import SimpleSelect from "../../../components/select";

import MaterialUIPickers from "../../../components/datepicker";
import opacityJPG from "../../../assest/images/opacityJPG.jpg";
import opacity from "../../../assest/images/opacity.png";
import circle from "../../../assest/images/circle.jpeg";
import plus from "../../../assest/images/plus.PNG";
import sub from "../../../assest/images/sub.PNG";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LargeRangeSlider from "../../../components/largeRange";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  TimePicker,
} from "@material-ui/pickers";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Schedule } from "@material-ui/icons";
const drawerWidth = "25vw";
const data = [
  { id: 1, name: "10-20" },
  { id: 2, name: "10-20" },
  { id: 3, name: "10-20" },
];

const names = ["10-20", "21-30", "31-40", "41-50", "51-60", "61-70"];
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  tabs: {
    "& button": {
      padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        ? "0 1.5rem"
        : 0,
      // fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
      color: "#28ace2",
      outline: "none",
    },

    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  roots: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderColor: "skyblue",
    color: theme.palette.text.secondary,
    borderWidth: 3,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function JobPost() {
  const classes = useStyles();
  const user = useSelector((state) => state.getDataReducer.user);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState([12, 20]);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [spacing, setSpacing] = React.useState(2);
  const [personName, setPersonName] = React.useState([]);
  const [findUs, setFindUs] = React.useState({ categoryId: "" });
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const [selectOptions, setSelectOptions] = React.useState([]);
  const [dropDown, setDropDown] = useState({
    category: "Child care",
    withIn: "5 miles",
  });
  const [dob, setDob] = React.useState(
    moment().subtract(18, "years").calendar()
  );

  const [viewed, setViewed] = useState([]);
  const [careseekers, setCareseekers] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleViewed = async (e) => {
    try {
      const respJSON = await fetch(`https://api.ongstercare.com/view-profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          viewedId: e.id,
        }),
      });
      const resp = await respJSON.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChanges = (event) => {
    console.log(event, "SSSSS");
    setPersonName(event);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event;
    const value = [];
    for (let i = 0; i < 1; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  const getViewed = async () => {
    try {
      const respJSON = await fetch(
        `https://api.ongstercare.com/get-viewed-profiles/${user.id}`
      );
      const resp = await respJSON.json();
      if (resp.success) {
        return setViewed(resp.data);
      }
      return setViewed([]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAllCareseeker = async () => {
    try {
      const respJSON = await fetch(
        `https://api.ongstercare.com/get-careseeker-main-dashboard`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            zipCode: 1234,
            range: 123,
          }),
        }
      );
      const resp = await respJSON.json();
      // console.log(resp)
      if (resp.success) {
        setCareseekers(resp.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAllCareseeker();
    getViewed();
    setSelectOptions(data.map((val) => ({ value: val.id, detail: val.name })));
  }, []);

  const handleCategory = (val) => {
    setFindUs({ ...findUs, categoryId: val });
    console.log(val, "valll");
  };

  const handleDropDownChange = (e, key) => {
    setDropDown({ ...dropDown, [key]: e.target.value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHelpOption = (val) => {
    setFindUs({ ...findUs, helpOption: val });
    console.log(val, "valll");
  };

  return (
    <div>
      <Header handleOpen={handleOpen} />
      <Row className="bg-light">
        <Col xs={12}>
          {/* visible only xs */}

          <div className="d-none d-sm-block">
            <div className="d-flex    ">
              <div
                // flex-lg-nowrap
                // flex-sm-wrap
                className={`d-flex   mx-auto my-2 bg-white p-2 align-items-center ${
                  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                    ? "w-100"
                    : "w-50"
                }`}
              >
                <div className="pl-3" style={{ marginTop: 20 }}>
                  <p className="small text-muted">Near0</p>
                  <Typography variant="body1">
                    <input type="text" placeholder="Zip Code" />

                    {/* <Form.Control placeholder="Zip" /> */}
                  </Typography>{" "}
                  <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
                </div>
                <span className="w-100">
                  <StandardSelect
                    label="Category"
                    value={dropDown.category}
                    onChange={(e) => handleDropDownChange(e, "category")}
                    dropOptions={[
                      "Child care",
                      "Special needs",
                      "Senior care ",
                      "Tutoring & lessons",
                      "Pet care ",
                      "Errands & odd jobs",
                    ]}
                  />
                </span>
                <span className="px-3">
                  <StandardSelect
                    label="Within"
                    dropOptions={[
                      "5 miles",
                      "10 miles",
                      "15 miles",
                      "20 miles",
                      "25 miles",
                      "30 miles",
                      "35 miles",
                      "40 miles",
                      "45 miles",
                      "50 miles",
                    ]}
                    value={dropDown.withIn}
                    onChange={(e) => handleDropDownChange(e, "withIn")}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="d-block d-sm-none">
            {" "}
            <div className="d-flex d-none    ">
              <div
                // flex-lg-nowrap
                // flex-sm-wrap
                className={`d-flex  flex-wrap  mx-auto my-2 bg-white p-2 align-items-center ${
                  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                    ? "w-100"
                    : "w-50"
                }`}
              >
                <div className="pl-3" style={{ marginTop: 20 }}>
                  <p className="small text-muted">Near1</p>
                  <Typography variant="body1">
                    <input type="text" placeholder="Zip Code" />

                    {/* <Form.Control placeholder="Zip" /> */}
                  </Typography>{" "}
                  <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
                </div>
                <span className="w-100">
                  <StandardSelect
                    label="Category"
                    value={dropDown.category}
                    onChange={(e) => handleDropDownChange(e, "category")}
                    dropOptions={[
                      "Child care",
                      "Special needs",
                      "Senior care ",
                      "Tutoring & lessons",
                      "Pet care ",
                      "Errands & odd jobs",
                    ]}
                  />
                </span>
                <span className="px-3">
                  <StandardSelect
                    label="Within"
                    dropOptions={[
                      "5 miles",
                      "10 miles",
                      "15 miles",
                      "20 miles",
                      "25 miles",
                      "30 miles",
                      "35 miles",
                      "40 miles",
                      "45 miles",
                      "50 miles",
                    ]}
                    value={dropDown.withIn}
                    onChange={(e) => handleDropDownChange(e, "withIn")}
                  />
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* className="d-none d-md-none d-lg-block" */}
      <div className="w-100  ">
        <img className="w-100" src={opacityJPG} alt="" />
        <div
          className="position-absolute text-white banner"
          style={{ position: "absolute", bottom: "40%", left: "30%" }}
        >
          <p className="h1 smallH1">How Often Do You Need Help?</p>
        </div>
      </div>
      <Container className="d-flex justify-content-center">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            border: "2px solid white",
            boxShadow: "0px 0px 1px 1px black",
            position: "absolute",
            top: "85%",
            flexDirection: "row",
          }}
          className="w-50 d-none d-md-none d-lg-block "
        >
          <br />
          <div
            className="d-flex justify-content-center"
            style={{
              border: "3px solid black",
              borderRadius: 15,
              backgroundColor: "lightblue",
            }}
          >
            <div
              className="w-50 "
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <br />
              <p style={{ textAlign: "center" }}>Recurring</p>
              <br />
            </div>

            <div
              className="w-50 "
              style={{ backgroundColor: "lightblue", borderRadius: 10 }}
            >
              <br />
              <p style={{ textAlign: "center" }}>One Time</p>
              <br />
            </div>
          </div>
          <br />
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            border: "2px solid white",
            boxShadow: "0px 0px 1px 1px black",
            position: "absolute",
            top: "55%",
            flexDirection: "row",
          }}
          className="w-50 d-none d-md-block d-lg-none "
        >
          <br />
          <div
            className="d-flex justify-content-center"
            style={{
              border: "3px solid black",
              borderRadius: 15,
              backgroundColor: "lightblue",
            }}
          >
            <div
              className="w-50 "
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <br />
              <p style={{ textAlign: "center" }}>Recurring</p>
              <br />
            </div>

            <div
              className="w-50 "
              style={{ backgroundColor: "lightblue", borderRadius: 10 }}
            >
              <br />
              <p style={{ textAlign: "center" }}>One Time</p>
              <br />
            </div>
          </div>
          <br />
        </div>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        ></div>
      </Container>
      <Container>
        <div
          style={{
            height: "70%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
          }}
          className="w-100 bg-light"
        >
          <br />
          <p style={{ textAlign: "center" }}>Fill in Details</p>
          <br />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <h5 style={{ textAlign: "center" }}>At what date and Time</h5>
        </div>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="" className="mx-3">
                <Form.Label>Start Date</Form.Label>
                {/* <Form.Control type="text" placeholder="DOB" className="w-100 p-4" /> */}
                <MaterialUIPickers setDate={setDob} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="" className="mx-3">
                <Form.Label>End Date</Form.Label>
                {/* <Form.Control type="text" placeholder="DOB" className="w-100 p-4" /> */}
                <MaterialUIPickers setDate={setDob} />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <h5 className="d-none d-sm-block" style={{ marginLeft: "45%" }}>
          Specify Time
        </h5>
        <h5 className="d-block d-sm-none" style={{ marginLeft: "35%" }}>
          Specify Time
        </h5>
        <Container className="d-flex justify-content-center">
          <Row>
            {/* <Col xs={12} md={6}>
              <Form.Group controlId="" className="mx-3">
                <Form.Label>Start Time </Form.Label>
               //// <Form.Control type="text" placeholder="DOB" className="w-100 p-4" />
                <MaterialUIPickers
                  setDate={setDob}
                  md={true}
                  maxDate={moment().subtract(18, "years").calendar()}
                />
              </Form.Group>
            </Col> */}
            <Col xs={12} md={6}>
              <Form.Group controlId="" className="mx-3">
                <Form.Label style={{ paddingTop: 20 }}>Start Time</Form.Label>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker
                    ampm={false}
                    margin="normal"
                    id="time-picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    className="my-time-picker"
                    style={{ width: "100%" }}
                    InputProps={{ readOnly: true }}
                    autoOk={true}
                    keyboardIcon={<Schedule />}
                  />

                  <style type="text/css">
                    {`
               .my-time-picker.MuiFormControl-root.MuiTextField-root.MuiFormControl-marginNormal{
                border: 1px solid silver;
                
            }
            `}
                  </style>
                </MuiPickersUtilsProvider>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="" className="mx-3">
                <Form.Label style={{ paddingTop: 20 }}>End Time</Form.Label>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker
                    ampm={false}
                    margin="normal"
                    id="time-picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    className="my-time-picker"
                    style={{ width: "100%" }}
                    InputProps={{ readOnly: true }}
                    autoOk={true}
                    keyboardIcon={<Schedule />}
                  />

                  <style type="text/css">
                    {`
               .my-time-picker.MuiFormControl-root.MuiTextField-root.MuiFormControl-marginNormal{
                border: 1px solid silver;
                padding: .5rem 1rem;
            }
            `}
                  </style>
                </MuiPickersUtilsProvider>
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <Row className="d-none d-sm-block" style={{ marginLeft: 220 }}>
          <img src={circle} />
          <h5 style={{ marginTop: 2 }}>My Schedule My Vary</h5>
        </Row>
        <Row className="d-block d-sm-none" style={{ marginLeft: 0 }}>
          <img src={circle} />
          <h5 style={{ marginTop: 25 }}>My Schedule My Vary</h5>
        </Row>
      </Container>
      <Container>
        <hr />
      </Container>
      {/* <h5 className="d-none d-sm-block" style={{ marginLeft:"45%" }}>Specify Time</h5>
        <h5 className="d-block d-sm-none" style={{ marginLeft: "35%" }}>Specify Time</h5> */}
      <Container className="d-flex justify-content-center">
        <h5>Where Do You need Care</h5>
      </Container>
      <Container className="d-flex justify-content-center">
        <Col
          className="d-none d-sm-block"
          xs={9}
          md={7}
          style={{ marginLeft: 280 }}
        >
          <Form.Group controlId="" className="mx-3">
            <Form.Control type="text" placeholder="6055" className="w-50 p-4" />
          </Form.Group>
        </Col>

        <Col
          className="d-block d-sm-none"
          xs={9}
          md={7}
          style={{ marginLeft: 0 }}
        >
          <Form.Group controlId="" className="mx-3">
            <Form.Control
              type="text"
              placeholder="6055"
              className="w-100 p-4"
            />
          </Form.Group>
        </Col>
      </Container>
      <Container className="d-flex justify-content-center">
        <h5 style={{ color: "skyBlue" }}>Eudorka</h5>
      </Container>
      <Container>
        <hr />
      </Container>
      <Container className="d-flex justify-content-center">
        <h5>How many Kids need Care? </h5>
      </Container>
      {/* <Row>
        <Col>
          <Container>
            <img src={plus} />
          </Container>
        </Col>
        <Col>
          <Container>
            <img src={plus} />
          </Container>
        </Col>
      </Row> */}
      <Container className="d-flex justify-content-center">
        <Row style={{ marginTop: 75 }}>
          <img
            src={sub}
            width={50}
            height={50}
            onClick={() => {
              if (count == 1) {
                setCount(count);
              } else {
                setCount(count - 1);
              }
            }}
          />
          <h5 style={{ fontSize: 35, marginRight: 20, marginLeft: 20 }}>
            {" "}
            {count}{" "}
          </h5>
          <img
            src={plus}
            width={50}
            height={50}
            onClick={() => {
              if (count == 4) {
                setCount(count);
              } else {
                setCount(count + 1);
              }
            }}
          />
        </Row>
      </Container>

      <Container
        style={{ marginTop: 20 }}
        className="d-flex justify-content-center"
      >
        <Col xs={10} md={4} style={{ marginTop: 40 }}>
          <Form.Group controlId="" className="mx-3">
            <SimpleSelect
              label="Select Age"
              multiple
              value={personName}
              setValue={handleChanges}
              options={[
                { value: "10-20", detail: "10-20" },

                { value: "21-30", detail: "21-30" },
                { value: "31-40", detail: "31-40" },
                { value: "41-50", detail: "41-50" },
                { value: "51-60", detail: "51-60" },
                { value: "61-70", detail: "61-0" },
              ]}
            />
          </Form.Group>
        </Col>
      </Container>

      <Container>
        <hr />
      </Container>
      <Container className="d-flex justify-content-center">
        <h3>Will they need help with Distance Learning</h3>
      </Container>
      <Container className="d-flex justify-content-center">
        <h6 style={{ marginTop: 25 }}>
          Ensure Kids Attend their School's online classes and keep up your
          Assignments
        </h6>
      </Container>
      <Container className="d-flex justify-content-center">
        <Row style={{}}>
          <img src={circle} />
          <h5 style={{ marginTop: 25 }}>Yes , Distance Learning help needed</h5>
        </Row>
      </Container>
      <Container>
        <hr />
      </Container>
      <Container className="d-flex justify-content-center">
        <h3 style={{ marginTop: 100 }}>Do you need any Extra Help</h3>
      </Container>
      <Container className="d-flex justify-content-center">
        <h6 style={{ marginTop: 25 }}>Select all that Apply</h6>
      </Container>

      {/* <Grid container justify="center" spacing={1}>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Laundry
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Meal Prepration
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Home Work Help
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Light House keeping
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Errand Grossary Shopping
          </Paper>
        </Grid>
        
      </Grid> */}
      <Container
        style={{ marginTop: 20 }}
        className="d-flex justify-content-center"
      >
        <Col xs={10} md={4} style={{ marginTop: 40 }}>
          <Form.Group controlId="" className="mx-3">
            <SimpleSelect
              label="Select"
              multiple
              value={personName}
              setValue={handleChanges}
              options={[
                { value: "Laundry", detail: "Laundry" },

                { value: "Meal Prepration", detail: "Meal Prepration" },
                { value: "Home Work Help", detail: "Home Work Help" },
                { value: "Light House keeping", detail: "Light House keeping" },
                {
                  value: "Errand Grossary Shopping",
                  detail: "Errand Grossary Shopping",
                },
              ]}
            />
          </Form.Group>
        </Col>
      </Container>

      <Container>
        <hr />
      </Container>
      <Container className="d-flex justify-content-center">
        <h3 style={{ marginTop: 100 }}>Your Ideal Carigaver</h3>
      </Container>
      <Container className="d-flex justify-content-center">
        <h6 style={{ marginTop: 25 }}>Select all that Apply</h6>
      </Container>

      {/* <Grid container justify="center" spacing={1}>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Does not Smoke
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Has a College Degree
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Has own transporation
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Willing to drive Children
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            Is comfortable with pets
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={3} sm={2}>
          <Paper
            style={{ border: "2px solid skyblue", color: "black" }}
            className={classes.paper}
          >
            CPR / First Aid trained
          </Paper>
        </Grid>
      </Grid> */}

      <Container
        style={{ marginTop: 20 }}
        className="d-flex justify-content-center"
      >
        <Col xs={10} md={4} style={{ marginTop: 40 }}>
          <Form.Group controlId="" className="mx-3">
            <SimpleSelect
              label="Select "
              multiple
              value={personName}
              setValue={handleChanges}
              options={[
                { value: "Does not Smoke", detail: "Does not Smoke" },

                {
                  value: " Has a College Degree",
                  detail: " Has a College Degree",
                },
                {
                  value: " Has own transporation",
                  detail: "Has own transporation ",
                },
                {
                  value: " Willing to drive Children",
                  detail: " Willing to drive Children",
                },
                {
                  value: "Is comfortable with pets",
                  detail: "Is comfortable with pets",
                },
                {
                  value: " Has own transporation",
                  detail: "Has own transporation ",
                },
                {
                  value: "CPR / First Aid trained",
                  detail: "CPR / First Aid trained",
                },
              ]}
            />
          </Form.Group>
        </Col>
      </Container>

      <Container>
        <hr />
      </Container>
      <Container className="d-flex justify-content-center">
        <h3 style={{ marginTop: 70 }}>
          How much you would like to pay per Hours
        </h3>
      </Container>
      <Container className="d-flex justify-content-center">
        <h6 style={{ marginTop: 25 }}>
          $11.48 is the Average in your Area.pay range Start at your Area's
          minimum wage.
        </h6>
      </Container>
      <Container>
        <LargeRangeSlider
          title="Select Hourly Rates"
          value={value1}
          setValue={setValue1}
        />
      </Container>
      <Container>
        <hr />
      </Container>
      <Footer />

      <style type="text/css">
        {`
                       .btn-flat1 {
                        background-color: white;
                        border:1px solid #a2deed;
                        color: black;
                             }
                        .btn-flat1:hover {
                        background-color: #a2deed;
                        color: white;
                             }      
                       .btn-flat2 {
                        background-color: white;
                        border:1px solid #FC3480;
                        color: black;
                             }
                        .btn-flat2:hover {
                        background-color: #FC3480;
                        color: white;
                             }      
                `}
      </style>
    </div>
  );
}
