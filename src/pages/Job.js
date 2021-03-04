import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Row, Col } from 'react-bootstrap';
import StandardSelect from "../components/standardSelect";
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import {
    Tabs,
    Tab,
    Typography,

} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
        },
    },
    tabs: {
        '& button': {
            padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "0 1.5rem" : 0,
            // fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
            color: "#28ace2",
            outline: "none",
        },

        width: "100%"

    },
    tabsRoot: {
        borderBottom: "1px solid silver"
    }
}));



export const Job = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
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
                    <Col xs={12} className="position-relative" >
                        <div className="d-flex justify-content-center py-2 " style={{ width: "fit-content", margin: "auto" }}>
                            <Tabs
                                value={value}
                                className={classes.tabs}
                                onChange={handleChange}
                                variant="standard"
                                color="primary"
                            // classes={{ root: classes.tabsRoot }}
                            >
                                <Tab label="Open Jobs" />
                                <Tab label="Closed Jobs" />

                            </Tabs>
                        </div>
                        <hr />
                        <div style={{
                            textAlign: "center",
                            //  transform: "translateY(50%)" 
                        }}>
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
                `}
            </style>
        </div >
    )
}