import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export const Step1 = ({ step, setStep, setStage }) => {
  const history = useHistory();
  console.log(step, setStep);
  const handleStep = () => {
    setStep(2);
    setStage(4);
  };
  return (
    <Form className="p-3">
      <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "28vh" } : { marginBottom: "0vh" }}>
        <Col xs={12}>
          <h3 className="text-capitalize blue-text">Get your required background screening</h3>
          <h5 className="mb-2">Normally $14.99</h5>
          <hr />
        </Col>
        <Col xs={12} md={6} className="mstep1">
          <p className="text-capitalize pl-3 mb-2">&nbsp; After screening you can:</p>
          <p className="text-capitalize mb-2">
            <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
            &nbsp; Apply To Any Job Near Your Area
          </p>
          <p className="text-capitalize mb-2">
            <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
            &nbsp; Personalize Your Profile
          </p>
          <p className="text-capitalize mb-2">
            <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
            &nbsp; Send &amp; Receive Unlimited Message
          </p>
        </Col>
        <Col xs={12} md={6}>
          <p className="text-muted small text-capitalize">Screening Fee is Non-Refundable.</p>
          <p className="text-muted small text-capitalize">Local Sales Tax May Be Added</p>
          <hr />
          {/* <p className="text-muted small text-capitalize">Screening Is Included In Care Premium.</p>
                <p className="blue-text small mb-3"><u>
                    First Month For Just $1
                                </u></p> */}
        </Col>
      </Row>

      <Form.Group className="w-100 d-flex ">
        <Button variant="flat" type="submit" className="btn-flat2 ml-auto p-2 mx-3" onClick={handleStep}>
          Save &amp; Continue
        </Button>
      </Form.Group>
      <hr />
      <p className="p-0 blowtxt ">
        Ongstercare.com does not employ, and is not responsible for any care provider or care seeker. you are responsible for selecting caregiver or job and for complying with all
        applicable laws. Ongstercare.com does not generator or verify information in profile, job posts or applications.
      </p>
    </Form>
  );
};
