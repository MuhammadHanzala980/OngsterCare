import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import {
    Typography,
    IconButton
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 13
    },

}));



export const GoPremium = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <Header handleOpen={handleOpen} />

            <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}>
                    <div className="text-center p-2">
                        <IconButton style={{ outline: "none" }}>
                            <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/path 391.png"} width="100" height="100" />
                        </IconButton>
                        <p className="h6">Go Premium</p>
                        <p className="small text-muted">Directly contact any professional</p>
                        <p className="small text-muted">Unlock messages from all candidates</p>
                        <p className="small text-muted"> Save time by hiring from better-matched candidates</p>
                        <Row className="m-2">

                            <Col xs={12} md={4} className="d-flex justify-content-center">
                                <div style={{
                                    height: 200,
                                    width: 210,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                }}>
                                    <div>
                                        <p className="text-muted small">1 Month</p>
                                        <p style={{ fontSize: "2.5rem" }}>$30</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={4} className="d-flex justify-content-center">
                                <div style={{
                                    height: 200,
                                    width: 210,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    backgroundColor: "#28ace2"
                                }}>
                                    <div className="bg-white rounded-circle" style={{ width: 100, height: 100 }}>
                                        <p className="text-muted small mt-2">3 Month</p>
                                        <p style={{ fontSize: "2.5rem" }}>$90</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} md={4} className="d-flex justify-content-center">
                                <div style={{
                                    height: 200,
                                    width: 210,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                }}>
                                    <div>
                                        <p className="text-muted small">12 Month</p>
                                        <p style={{ fontSize: "2.5rem" }}>$190</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <p className="small text-muted">*All subscriptions are automatically renewed until cancelled. All prices are inclusive of GST. <span className="blue-text small">Learn more.</span></p>
                    </div>

                </Col>
                <Col xs={0} md={2}></Col>
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