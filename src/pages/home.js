import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Row, Col } from "react-bootstrap";
import { TextField, Tabs, Tab, Typography, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Header } from "../components/header";
import { Header as Header2 } from "../components/header2";
import { Footer } from "../components/footer";
import TraModal from "../components/Models/popup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  tabs: {
    "& button": {
      padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "0 3px" : 0,
      fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
      color: "#28ace2",
      outline: "none",
    },

    width: "100%",
  },
}));

export const Home = ({ careSeeker, setCareSeeker }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.getDataReducer.user);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {user ? <Header2 /> : <Header handleOpen={handleOpen} setCareSeeker={setCareSeeker} />}
      <main>
        <div className="w-100">
          <img className="w-100" src={process.env.PUBLIC_URL + "/assets/icons/banner.png"} alt="" />
          <div className="position-relative text-white banner">
            <p className="h1 smallH1">Care for all you love</p>
            <p>In this time of need. We are here to help.</p>
          </div>
        </div>

        <Container className="content-mid">
          <Row>
            <Col xs={12} md={8}>
              <p className="h4">Search Caregiver in your Area</p>
              <div className="w-100">
                <form className={classes.root} noValidate autoComplete="off" className="position-relative">
                  <TextField label="Enter postalcode" variant="standard" size="small" className="input-search" />
                  <IconButton aria-label="add to favorites" style={{ outline: "none" }} className="searchIcon">
                    <SearchIcon fontSize="large" />
                  </IconButton>
                </form>
                <Tabs value={value} className={classes.tabs} onChange={handleChange} variant="scrollable">
                  <Tab label="Senior Care" />
                  <Tab label="Housekeeper" />
                  <Tab label="Special needs" />
                  <Tab label="Pet Care" />
                  <Tab label="School Support" />
                  <Tab label="Child Care" />
                </Tabs>

                <div className="w-100 p-3">
                  <div className="d-flex p-4 chacha-box">
                    <div className="w-30 px-3">
                      <img className="w-100" src={process.env.PUBLIC_URL + "/assets/icons/chacha.png"} alt="" />
                    </div>
                    <div className="w-70 m-auto text-center">
                      <h4>I Would Like To:</h4>
                      <Link to="/join-us">
                        <Button variant="flat" className="mx-3 my-2 btn-flat1" onClick={() => setCareSeeker(true)}>
                          Find a Caregiver
                        </Button>
                      </Link>
                      <Link to="/sign-up" className="text-dark" style={{ textDecoration: "none" }}>
                        <Button variant="flat" className="btn-flat2">
                          Find a Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="p-3 m-3 mt-5 side-div">
                <div className="my-2">
                  <img src={process.env.PUBLIC_URL + "/assets/icons/building.png"} className="w-25" alt="" />
                  <Button variant="flat" className="mx-3 my-2 btn-flat1">
                    Compare Option
                  </Button>
                </div>
                <div className="w-75">
                  <p>Explore your full-time child care option</p>
                  <p className="small">See local rates and make an informed choice</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />

      <TraModal open={open} setOpen={setOpen} setCareSeeker={setCareSeeker} />

      <style type="text/css">
        {`
                .input-search{
                    width:100%
                }
               .banner{
                top: -165px;
                left: 75px;
               }          
               .content-mid{
                margin-top: -4rem;
               }
               .searchIcon{
                position: absolute;
                right: -5px;
    top: -5px;
                color:#FC3480;
            }
            .side-div{
                background-color:#f1fafc
            }
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
                        background-color: #28ace2;
                        color: white;
                             }
                        .btn-flat2:hover {
                        background-color: #28ace280;
                        color: white;
                    }
                    
                             .chacha-box{
                                 border: 2px solid whitesmoke;
                                }
                             
                           
                `}
      </style>
    </div>
  );
};
