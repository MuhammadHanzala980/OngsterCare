import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StandardSelect from "../components/standardSelect";
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from "react-router-dom"
import {
    Tabs,
    Tab,
    TextField,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 13
    },
    tabs: {
        justifyContent: "center",
        '& button': {
            padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "0 3px" : 0,
            fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
            // color: "#28ace2",
            outline: "none",
        },
        width: "100%",
        border: "1px solid silver"
    },
    tabContainer: { justifyContent: "center" }
}));



export const EditProfile = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState({
        "Have a Car": { value: false, name: "havecar" },
        "Non-Smoker": { value: false, name: "nonSmoker" },
        "Comfortable with Pets": { value: false, name: "confortableWithPets" },
        "Accept Online Payment through OngsterCare.com": { value: false, name: "acceptOnlinePayment" },
        "Accept Profesional Payment": { value: false, name: "acceptProfessionalPayment" },

    })
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const dummyOptions = ["Nannies / Recurring Kids"]
    return (
        <div>
            <Header handleOpen={handleOpen} />
            <hr />
            <Container>
                <Row className="p-2">
                    <Col xs={12} md={3} className="border bolder-silver border-top-0 border-left-0 border-bottom-0">
                        <div className="position-relative">


                            <IconButton aria-label="add to favorites" style={{ outline: "none", position: "absolute", outline: "none", right: 10 }}>
                                <FavoriteIcon />
                            </IconButton>


                            <span style={{ width: 247, height: 220 }}>

                                <img src={process.env.PUBLIC_URL + "/assets/icons/Rectangle 62.png"} alt="" style={{ width: "100%", height: 220 }} />
                            </span>

                            <p className="text-white position-absolute" style={{ bottom: 0, left: "50%", transform: "translate(-50%,-50%)" }}>Change Photo</p>


                        </div>
                        <div className="d-flex justify-content-between">
                            <p style={{ fontSize: 18 }}>Laurel Matthews </p>
                        </div>
                        <div>
                            <p>New York,NY</p>
                            <p>22 Yr Old <span>.</span> 3 Year Experience  </p>
                            <hr />
                        </div>
                        <div>
                            <p>Verify Info</p>
                            <p>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/facebook2.png"} alt="" />
                                <span className="text-muted mx-2 ">Facebook</span>
                                <span className="blue-text ml-2">Verify Now</span>
                            </p>
                            <p>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/envelope.png"} alt="" />
                                <span className="text-muted mx-2">Email</span>
                                <span className="blue-text ml-2">Verify Now</span>
                            </p>
                            <hr />
                        </div>
                        <div>
                            <p>Hired 1 provider</p>
                            <p className="text-muted">Member since September 2020</p>
                        </div>

                    </Col>
                    <Col xs={12} md={9} className="position-relative">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex  align-items-center">
                                <p className="text-uppercase py-3" style={{ fontSize: 24 }}>Care needs : <span className="blue-text">Childcare</span></p>
                                <span style={{ width: 41, height: 41 }} className="px-2">
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/Child.png"} alt="" />

                                </span>
                            </div>
                            <div>
                                <Link to="/edit-form">

                                    <p className="text-muted">Edit Profile
                                <span className="px-2">

                                            <img src={process.env.PUBLIC_URL + "/assets/icons/edit(2).png"} alt="" />
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <Tabs
                            classes={{ flexContainer: classes.tabContainer }}
                            value={value}
                            className={classes.tabs}
                            onChange={handleChange}
                            variant="scrollable"
                            TabIndicatorProps={{ backgroundColor: "white" }}
                        >
                            <Tab label="No Active Jobs" />
                            <Tab label="No Closed Jobs" />

                        </Tabs>

                        {
                            // value === 0 ? <Bio /> :
                            //  <></>
                        }

                        <div style={{ textAlign: "center", transform: "translateY(50%)" }}>
                            <img src={process.env.PUBLIC_URL + "/assets/icons/noun_job.png"} alt="" />
                            <p>No Active Job</p>
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
                             .MuiTab-textColorInherit.Mui-selected{
                                color:#28ace2
                             }   
                            .MuiButtonBase-root.MuiTabScrollButton-root.MuiTabs-scrollButtons.MuiTabs-scrollButtonsDesktop.Mui-disabled{
                                display:none
                            } 
                `}
            </style>
        </div >
    )
}