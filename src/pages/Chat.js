import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Row, Col } from 'react-bootstrap';
import StandardSelect from "../components/standardSelect";
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import {
    Typography,
    IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
}));



export const Chat = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [dropDown, setDropDown] = React.useState({
        category: "Child care",
        withIn: "5 miles"
    });

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
                            {/* <div className="pl-3">
                                <p className="small text-muted">Near</p>
                                <Typography variant="body1" display="inline" >11098</Typography> <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
                            </div> */}

                             <div className="pl-3" style={{marginTop:20}}>
                <p className="small text-muted">Near</p>
                <Typography variant="body1" >
                  <input type="text" placeholder="Zip Code" />

                  {/* <Form.Control placeholder="Zip" /> */}
                </Typography>{" "}
                <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
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

                <Row >
                    <Col xs={12}>
                        <p className="text-center p-3 h3">Messages</p>
                    </Col>

                    <Col xs={12} lg={4} className="border border-silver">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Message</p> <div>
                                <IconButton style={{ outline: "none" }}>
                                    <SearchIcon className="blue-text" style={{ fontSize: "1.8rem" }} />
                                </IconButton>
                                <IconButton style={{ outline: "none" }}>
                                    <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/filter(1).png"} />
                                </IconButton>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div>
                            <div className="d-flex align-items-center py-2">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/dpman.png"} width="46" height="46" />
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                        <p className="px-2 small">Emily Watson</p>
                                        <span className="text-muted small">09:00am</span>
                                    </div>
                                    <p className="px-2 text-muted small">Donec sit amet dolor non velit</p>

                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center py-2">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/dpman.png"} width="46" height="46" />
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                        <p className="px-2 small">Emily Watson</p>
                                        <span className="text-muted small">09:00am</span>
                                    </div>
                                    <p className="px-2 text-muted small">Donec sit amet dolor non velit</p>

                                </div>
                            </div>
                            <hr className="m-0" />
                        </div>
                    </Col>

                    <Col xs={12} lg={8} className="border border-silver" style={{ height: "50vh" }}>
                        <div className="d-flex align-items-center justify-content-between py-1">
                            <div className="d-flex align-items-center">
                                <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/dpman.png"} width="46" height="46" />
                                <p className="px-2 h6">Steve Peterson</p>
                            </div>

                            <IconButton style={{ outline: "none" }}>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                        <hr className="m-0" />
                        <div className="d-flex py-2 position-relative">
                            <p className="small chat-receive">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu.</p>
                            <span className="text-muted position-absolute small" style={{ bottom: -10, left: "33%" }}>20 Sep, 09:00am</span>
                        </div>
                        <div class="form-group">

                            <input type="text" class="form-control chat-input" name="" id="" placeholder="New message write here……" />
                            <Button variant="flat" className="chat-btn">
                                Send
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
        </div >
    )
}