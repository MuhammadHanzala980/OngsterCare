
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Bio = ({ bioData }) => {
    return (
        <div className="p-3">
            <h5 className="m-2">{bioData.firstName} {bioData.middleName} {bioData.lastname}</h5>
            <p className="mx-2 text-justify">{bioData.profileLater}</p>
        </div>
    )
}

export const Reviews = () => {
    return (
        <div className="p-3">
            <h5 className="mb-3">Reviews</h5>
            <Row>
                <Col xs={2} md={1}>
                    <div style={{ width: 48, height: 48 }}>

                        <img src={process.env.PUBLIC_URL + "/assets/icons/Ellipse 40.png"} alt="" className="w-100" />
                    </div>

                </Col>
                <Col xs={10} md={11} className="pb-4">
                    <p>Michelle Palmer</p>
                    <p className="text-muted small">Sep 10</p>
                    <p>In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus.</p>
                </Col>
                <Col xs={2} md={1}>
                    <div style={{ width: 48, height: 48 }}>

                        <img src={process.env.PUBLIC_URL + "/assets/icons/dpman.png"} alt="" className="w-100" />
                    </div>

                </Col>
                <Col xs={10} md={11}>
                    <p>Frank Valdez</p>
                    <p className="text-muted small">Sep 10</p>
                    <p>In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus.</p>
                </Col>

                <Col xs={12}>
                    <Button variant="flat" className="my-2 w-100 btn-flat1" >
                        Write a Review
                                                </Button>
                </Col>
            </Row>
        </div>
    )
}

export const Availability = ({ availability }) => {
    return (
        <div className="p-3">
            <h5 className="mb-3">Availability</h5>
            <p>For recurring jobs <br />
Jenna hasn't filled out their general availability yet. Send a message to check when they're available. </p>
        </div>
    )
}
export const Experience = ({ options }) => {
    return (
        <div className="p-3">
            <h5 className="mb-3">Experience</h5>
            {
                Object.keys(options).map((v, i) => {
                    return <p key={i} className={'gender w-100 my-2'} style={{ textAlign: "inherit" }} /*onClick={(e) => handleOptions(v)}*/>
                        {options[v].value ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> :
                            <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />} {v}
                    </p>

                })
            }
            <hr />
            <h5 className="mb-3">Work History</h5>
            <div className="mb-2">
                <p>Babysitter - Star K. family</p>
                <p className="text-muted">Dec. 2019 - present </p>
            </div>
            <div className="mb-2">
                <p>Babysitter - Star K. family</p>
                <p className="text-muted">Dec. 2019 - present </p>
            </div>
            <div className="mb-2">
                <p>Babysitter - Star K. family</p>
                <p className="text-muted">Dec. 2019 - present </p>
            </div>
        </div>
    )
}
export const Safety = () => {
    return (
        <div className="p-3">
            <h5 className="mb-3">Safety &amp; Verifications</h5>
            <Row>
                {
                    [1, 2, 3].map((val, i) => {
                        return (
                            <Col key={i} xs={12} md={4}>
                                <div className="text-center">
                                    <div>
                                        <span style={{ width: 80, height: 80 }}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/icons/${i === 0 ? "steering-wheel" : i === 1 ? "police" : "policeman"}.png`} alt="" />
                                        </span>
                                    </div>
                                    <p>Motor Vehicle <br />
        Records</p>
                                    <p className="text-muted">not on file</p>
                                </div>
                                <Button variant="flat" className="my-2 w-100 btn-flat1" >
                                    Purchase
                                </Button>
                            </Col>
                        )
                    })
                }
                <Col xs={12}>
                    <p className="text-muted">To help keep our community safe, Care.com conducts limited screening on all caregivers.
                    But you need to do more: Interview candidates. Check references. Run a background
check. And visit our Safety Center to learn more. </p>
                    <Button variant="flat" className="my-2 w-50" >
                        View Background Check Button
                                                        </Button>
                    <p>Screenings and verifications</p>
                    <p className="small">Safety is important to us. As of July 2019, we have begun to enhance our caregiver screening to include a background check called a CareCheck. This process will take some time. Look for the CareCheck badge on caregiver profiles. If you do not see the CareCheck badge, a CareCheck has not been run yet.

The presence of a CareCheck does not replace the role you play in making the right decision for your loved ones. We recommend you always run your own background check and follow our 5 steps to hiring safely.</p>

                </Col>
            </Row>
        </div>
    )
}

export const Education = ({ education }) => {
    return (
        <div className="p-3">
            <h5 className="mb-3">Education &amp; Qualification</h5>
            <p>Brooklyn College
                                                    <br />
                                                        Bachelor’s</p>
        </div>
    )
}
export const Skill = ({ language }) => {
    return (
        <div className="p-3">
            <div className="mb-3">
                <h5 className="mb-3">Language</h5>
                <p>{language === "English" ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> : <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />}English</p>
                <p>{language === "Spanish" ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> : <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />}Spanish</p>

            </div>
            <h5 className="mb-3">Professional Skills</h5>
            <p><img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />Early Childhood Education (ECE) </p>
        </div>
    )
}
export const Payment = () => {
    return (
        <div className="p-3">
            <div className="mb-3">
                <h5 className="mb-3">Payment Preferences</h5>
                <p><img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />Cash</p>
                <p><img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />Direct Deposit</p>
                <p><img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />Personal Check</p>
                <p><img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />Wiling to have taxes withheld</p>
                <div className="w-25 text-center">

                    <Button variant="flat" className="my-2 w-75 btn-flat1" >
                        Pay Now
                    </Button>
                </div>
            </div>

        </div>
    )
}