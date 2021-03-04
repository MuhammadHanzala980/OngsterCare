
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const SafetyOverview = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <p className="h5">We Background Check Caregivers </p>
                    <p className=" py-2">Caregivers Are Asked To Complete Carecheck, The Background Check In Our Screening Process. Caregivers
Who Complete This Background Check Will Have A Carecheck Badge On Their Profile.</p>
                    <p className=" py-2">Carecheck Includes:</p>
                    {
                        ["Social Security Number Trace", "Multi-Jurisdictional Criminal Database Search", "Federal And County Criminal Records Search", "National Sex Offender Public Website Search"].map((val, i) =>
                            <p key={i} className=" p-2"> <img alt="" src={`${process.env.PUBLIC_URL}/assets/icons/Polygon 8.png`} />
                                {val}</p>
                        )
                    }

                    <p className=" pt-2">Carecheck Is A Great Start.</p>
                    <p className=" ">But We Strongly Recommend Families Run Checks Of Their Own To Make The Best Hiring Decisions.</p>
                    <p className=" blue-text">What To Know When Hiring In Massachusetts</p>
                    <hr />
                </Col>
                <Col xs={12}>
                    <div className="d-flex">
                        <div>
                            <img alt="" src={`${process.env.PUBLIC_URL}/assets/icons/mobile.png`} width="170" />
                        </div>
                        <div className="px-3 py-5">
                            <p className="h4">
                                We Review Profiles Personally
                            </p>
                            <p className="">
                                All Caregiver Profiles On Our Site Are Also Reviewed By Real People Before They Go Live.
                                    </p>
                            <p className="small">
                                Our Dedicated Team Of Human Moderators Monitor Job Posts And Profile Activity. </p>

                        </div>

                    </div>
                    <hr />
                </Col>
                <Col xs={12}>
                    <div className="d-flex">
                        <div>
                            <img alt="" src={`${process.env.PUBLIC_URL}/assets/icons/Asset 2.png`} width="125" />
                        </div>
                        <div className="p-5">
                            <p className="h4">
                                We Review Profiles Personally
                            </p>
                            <p className="">
                                All Caregiver Profiles On Our Site Are Also Reviewed By Real People Before They Go Live.
                                    </p>
                            <p className="small">
                                Our Dedicated Team Of Human Moderators Monitor Job Posts And Profile Activity. </p>

                        </div>

                    </div>
                    <hr />
                </Col>
                <Col xs={12}>
                    <div className="d-flex">
                        <div>
                            <img alt="" src={`${process.env.PUBLIC_URL}/assets/icons/Layer 2.png`} width="135" />
                        </div>
                        <div className="p-5">
                            <p className="h4">
                                We Review Profiles Personally
                            </p>
                            <p className="">
                                All Caregiver Profiles On Our Site Are Also Reviewed By Real People Before They Go Live.
                                    </p>
                            <p className="small">
                                Our Dedicated Team Of Human Moderators Monitor Job Posts And Profile Activity. </p>

                        </div>

                    </div>
                    <hr />
                </Col>

                <Col xs={12}>
                    <hr />
                    <p className="h5">Additional Safety Resources </p>
                </Col>
                <Row>
                    <Col xs={6}>
                        <p className="border border-silver p-3  m-2 d-flex justify-content-between cursor-pointer">
                            <span> Caregiver FAQs </span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <p className="border border-silver p-3 m-2 d-flex justify-content-between cursor-pointer">
                            <span>Family FAQs</span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <p className="border border-silver p-3  m-2 d-flex justify-content-between cursor-pointer">
                            <span>Background Check Information</span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <p className="border border-silver p-3  m-2 d-flex justify-content-between cursor-pointer">
                            <span>Day Care Information</span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <p className="border border-silver p-3  m-2 d-flex justify-content-between cursor-pointer">
                            <span>Nanny Shares</span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                    <Col xs={6}>
                        <p className="border border-silver p-3  m-2 d-flex justify-content-between cursor-pointer">
                            <span>Safety Articles </span>
                            <span><ArrowForwardIosIcon fontSize="small" /></span>
                        </p>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
