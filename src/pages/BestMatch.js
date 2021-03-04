import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import MediaCard from "../components/card";
import SimpleCard from "../components/simpleCard";
import StandardSelect from "../components/standardSelect";
import { Header } from "../components/header2";
import { Footer } from "../components/footer";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const drawerWidth = "25vw";

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
}));

export const BestMatch = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.getDataReducer.user);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState({
    category: "Child care",
    withIn: "5 miles",
  });

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
  }, []);

  const handleDropDownChange = (e, key) => {
    setDropDown({ ...dropDown, [key]: e.target.value });
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
     
     
     
      <Container>
        <Row>
          <Col xs={12}>
            <div
              className="d-flex justify-content-center py-2"
              style={{ width: "fit-content", margin: "auto" }}
            >
              <Tabs
                value={value}
                className={classes.tabs}
                onChange={handleChange}
                variant="standard"
                color="primary"
              >
                <Tab label="Best Match" />
                <Tab label="Viewed" />
                <Tab label="Favorite" />
              </Tabs>
            </div>
          </Col>
          {value === 0 ? (
            !!careseekers.length ? (
              careseekers.map((val, i) => {
                return (
                  <Col xs={6} md={3} className="p-2" key={i}>
                    <Link
                      to={`/caregiver-detail/${val.id}`}
                      className="text-decoration-none"
                      onClick={() => handleViewed(val)}
                    >
                      <MediaCard user={val} />
                    </Link>
                  </Col>
                );
              })
            ) : (
              <Col xs={12}>
                <div>
                  <p className="h6 text-center m-5">No Record Found</p>
                </div>
              </Col>
            )
          ) : value === 1 ? (
            !!viewed.length ? (
              viewed.map((val, i) => {
                return (
                  <Col xs={6} md={3} className="p-2" key={i}>
                    <Link
                      to={`/caregiver-detail/${val.id}`}
                      className="text-decoration-none"
                      onClick={() => handleViewed(val)}
                    >
                      <MediaCard user={val} />
                    </Link>
                  </Col>
                );
              })
            ) : (
              <Col xs={12}>
                <div>
                  <p className="h6 text-center m-5">No Record Found</p>
                </div>
              </Col>
            )
          ) : (
            <></>
          )}
          {/* <Col xs={12}>
                        <div className="d-flex">
                            <Button variant="flat" className="my-2 mx-auto px-5  btn-flat1" >See More</Button>
                        </div>
                    </Col> */}
        </Row>
      </Container>
      <Container>
        <Typography variant="body1">Human Resourse </Typography>
        <Row>
          {[
            { no: 0, img: 7 },
            { no: 0, img: 8 },
            { no: 0, img: 9 },
            { no: 0, img: 7 },
          ].map((val, i) => {
            return (
              <Col xs={6} md={3} className="p-2" key={i}>
                <SimpleCard
                  title="how much does-
child care cost"
                  detail=""
                  img={val.img}
                />
              </Col>
            );
          })}
          <Col xs={12}>
            <div className="d-flex">
              <Button variant="flat" className="my-2 mx-auto px-5 btn-flat2">
                See More
              </Button>
            </div>
          </Col>
        </Row>
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
};
