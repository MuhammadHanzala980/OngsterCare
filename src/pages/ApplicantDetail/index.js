import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Row, Col } from 'react-bootstrap';
import StandardSelect from "../../components/standardSelect";
import { Header } from '../../components/header2';
import { Footer } from '../../components/footer';
import {
    Tabs,
    Tab,
    Typography,
    IconButton
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
        },
    },
    tabs: {
        '& button': {
            padding: 0,
            fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
            color: "#28ace2",
            outline: "none",
        },

        width: "100%"

    },

}));



export const ApplicantDetail = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(3);
    const [open, setOpen] = React.useState(false);
    const [dropDown, setDropDown] = React.useState({
        category: "Child care",
        withIn: "5 miles"
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleDropDownChange = (e, key) => {
        setDropDown({ ...dropDown, [key]: e.target.value });
    }

    return (
        <div>
            <Header handleOpen={handleOpen} />
            <Row className="bg-light">
                <Col xs={12}>
                    <div className="d-flex">
                        <div className={`d-flex mx-auto my-2 bg-white p-2 align-items-center ${/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'w-100' : 'w-50'}`}>
                            <div className="pl-3">
                                <p className="small text-muted">Near</p>
                                <Typography variant="body1" display="inline" >11098</Typography> <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
                            </div>
                            <span className="w-100">
                                <StandardSelect value={dropDown.category} onChange={e => handleDropDownChange(e, 'category')} label="Category" dropOptions={["Child care", "Special needs", "Senior care ", "Tutoring & lessons", "Pet care ", "Errands & odd jobs"]} />
                            </span>
                            <span className="px-3">
                                <StandardSelect value={dropDown.withIn} onChange={e => handleDropDownChange(e, 'withIn')} label="Within" dropOptions={['5 miles']} />
                            </span>

                        </div>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={12} >
                        <div className="d-flex justify-content-center py-2" style={{ width: "fit-content", margin: "auto" }}>
                            <Tabs
                                value={value}
                                className={classes.tabs}
                                onChange={handleChange}
                                variant="standard"
                                color="primary"
                                variant="scrollable"
                            >
                                <Tab label="Applicants" />
                                <Tab label="Favorites" />
                                <Tab label="Viewed" />
                                <Tab label="Hired" />

                            </Tabs>


                        </div>
                        <div>

                            {
                                value === 0 ?
                                    <div style={{ textAlign: "center", transform: "translateY(25%)", height: "60vh" }}>
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/Employee.png"} alt="" />
                                        <p className="text-muted small">You have not posted any jobs yet.</p>
                                        <p className="text-muted small mb-2">Post a job and your applicants will show up here.</p>
                                        <Button variant="flat" >
                                            Post a Job
                    </Button>
                                    </div> :
                                    value === 1 ?
                                        <div style={{ textAlign: "center", transform: "translateY(25%)", height: "60vh" }}>
                                            <img src={process.env.PUBLIC_URL + "/assets/icons/Heart_.png"} alt="" />
                                            <p className="text-muted small">You don’t have any favorites yet.</p>
                                            <p className="text-muted small mb-2">Add some and they will show up here.</p>
                                            <Button variant="flat" >
                                                Search for CareGiver
                    </Button>
                                        </div>
                                        :
                                        value === 2 ? <>
                                            <Col xs={12} className="d-flex justify-content-center">

                                                <div className="d-flex justify-content-between result-found border border-dark border-left-0 border-right-0 border-top-0">
                                                    <p>2 Views</p> <p>Sort By : <span className="blue-text">Newest <ExpandMoreIcon /></span> </p>
                                                </div>

                                            </Col>
                                            {
                                                [1, 2].map((val, i) => {
                                                    return (
                                                        <Col key={i} xs={12} className="d-flex justify-content-center">
                                                            <div className="d-flex justify-content-between result-found pb-3 border border-silver border-right-0 border-left-0 border-top-0">
                                                                <div className="position-relative">
                                                                    <img src={process.env.PUBLIC_URL + "/assets/icons/Rectangle 52.png"} alt="" width="150" height="170" />
                                                                    <img src={process.env.PUBLIC_URL + "/assets/icons/Group 89.png"} alt="" className="premium-btn" />
                                                                </div>
                                                                <div className="p-2 mb position-relative">
                                                                    <p style={{ fontSize: 18 }}>Laurel Matthews <span className="small">New York,NY</span> </p>
                                                                    <p>Part Time &nbsp;&nbsp; 22 Yr Old &nbsp;&nbsp; 9 Yr Exp</p>
                                                                    <p className="text-muted ">I am a charismatic person who is always up for a
                new challenge, with a love for both children…</p>
                                                                    <p className="blue-text mb3 d-flex justify-content-between align-items-center position-absolute w-100" style={{ bottom: 0, fontSize: 18 }}>25$ per hour
                                                                        <div classNmae="ml-auto">

                                                                            <IconButton aria-label="add to favorites" style={{ outline: "none" }}>
                                                                                <FavoriteIcon />
                                                                            </IconButton> <img src={process.env.PUBLIC_URL + "/assets/icons/message_circle.png"} alt="" width="50" height="50" />
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                    )
                                                })
                                            }
                                        </>
                                            :
                                            value === 3 ?
                                                //                         <div style={{ textAlign: "center", transform: "translateY(25%)", height: "60vh" }}>
                                                //                             <img src={process.env.PUBLIC_URL + "/assets/icons/Handshake_.png"} alt="" />
                                                //                             <p className="text-muted small mt-3">You have not hired anyone yet.</p>
                                                //                             <p className="text-muted small mb-2">Hire someone and they will show up here.</p>
                                                //                             <Button variant="flat" >
                                                //                                 Search for CareGiver
                                                //  </Button>
                                                //                         </div>



                                                [1].map((val, i) => {
                                                    return (<>
                                                        <Col key={i} xs={12} className="d-flex justify-content-center">
                                                            <div className="d-flex justify-content-between result-found pb-3 border border-silver border-right-0 border-left-0 border-top-0">
                                                                <div className="position-relative">
                                                                    <img src={process.env.PUBLIC_URL + "/assets/icons/Rectangle 52.png"} alt="" width="150" height="170" />
                                                                    {/* <img src={process.env.PUBLIC_URL + "/assets/icons/Group 89.png"} alt="" className="premium-btn" /> */}
                                                                </div>
                                                                <div className="p-2 mb position-relative">
                                                                    <p style={{ fontSize: 18 }}>Laurel Matthews <span className="small">New York,NY</span>
                                                                        <IconButton aria-label="add to favorites" style={{ outline: "none", position: "absolute", right: 0, top: -2 }}>
                                                                            <MoreHorizIcon />
                                                                        </IconButton>
                                                                    </p>
                                                                    <p>Part Time &nbsp;&nbsp; 22 Yr Old &nbsp;&nbsp; 9 Yr Exp</p>
                                                                    <p className="text-muted ">I am a charismatic person who is always up for a
new challenge, with a love for both children…</p>
                                                                    <p className="blue-text mb3 d-flex justify-content-between align-items-center position-absolute w-100" style={{ bottom: 0, fontSize: 18 }}>25$ per hour
                        <div classNmae="ml-auto">

                                                                            <IconButton aria-label="add to favorites" style={{ outline: "none" }}>
                                                                                <FavoriteIcon />
                                                                            </IconButton>
                                                                            <img src={process.env.PUBLIC_URL + "/assets/icons/message_circle.png"} alt="" width="50" height="50" />
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} className="text-center">
                                                            <Button variant="flat" className="w-50 my-2 btn-flat1">Pay Now</Button>
                                                        </Col>
                                                    </>
                                                    )
                                                })

                                                : <></>
                            }

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
        </div >
    )
}