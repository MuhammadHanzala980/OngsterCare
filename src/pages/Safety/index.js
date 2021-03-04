import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import { SafetyOverview } from './details'
import { Header } from '../../components/header2';
import { Footer } from '../../components/footer';
import {
    Tabs,
    Tab,
    Typography,
    IconButton
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
            padding: 0,
            fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
            color: "#28ace2",
            outline: "none",
        },

        width: "100%"

    },

}));



export const Safety = () => {
    const classes = useStyles();
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
            <Header handleOpen={handleOpen} />

            <Row>
                <Col xs={12} style={{ backgroundColor: "#F2F5F7" }}>
                    <p className="p-3 h5 text-center" >Safety</p>
                </Col>
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
                            <Tab label="Safety Overview" />
                            <Tab label="Community Guidelines" />
                            <Tab label="Families" />
                            <Tab label="Caregivers" />

                        </Tabs>


                    </div>
                    <div>
                    </div>
                </Col>
                <Col xs={12} >
                    {
                        value === 0 ?
                            <SafetyOverview /> :
                            // value === 1 ?
                            // <Membership /> :
                            // value === 2 ?
                            //     <EditPreferences /> :
                            //     value === 3 ?
                            //         <CreditCard /> :

                            <></>
                    }
                </Col>


            </Row>




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