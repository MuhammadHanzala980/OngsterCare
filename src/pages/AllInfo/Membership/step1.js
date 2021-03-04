import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

export const Step1 = ({ step, setStep }) => {
    let [countChild, setCountChild] = useState(1)


    return (<Form className="p-3">
        <Row  style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "22vh" } : { marginBottom: "0vh" }}>
            <Col xs={12}>
                <h3 className="text-capitalize">Just $1 for your first month of premium</h3>
                <h5 className="mb-2">Today Only</h5>
                <p className="text-muted">Normally $8.99/month </p>
                <p className="text-capitalize">First month just $1</p>
                <hr />
            </Col>
            <Col xs={12} md={6} className="mstep1">
                <p className="text-capitalize mb-2">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                 &nbsp; 5X more likely to get hired</p>
                <p className="text-capitalize mb-2">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                 &nbsp; higher ranking to search result</p>
                <p className="text-capitalize mb-2">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                 &nbsp; message paying families</p>
                <p className="text-capitalize mb-2">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                 &nbsp; include safely screening</p>
            </Col>
            <Col xs={12} md={6} >
            <p className="text-capitalize h6">Renews at $8.99 after First month</p>
            <p className="text-muted small text-capitalize">Recurring billing</p>
            <p className="text-muted small text-capitalize">Local tax may apply</p>
            <p className="text-muted small text-capitalize">cancel any time</p>
            </Col>
        </Row>

        <Form.Group className="w-100 d-flex ">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto">
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 ml-3" onClick={() => setStep(++step)}>
                Next
</Button>

        </Form.Group>
        <hr />
        <p className="p-0 blowtxt ">Ongstercare.com does not employ, and is not responsible for any care provider or care seeker.
        you are responsible for selecting caregiver or job and for complying with all applicable laws.
        Ongstercare.com does not generator or verify information in profile, job posts or applications.
</p>

    </Form>)
}