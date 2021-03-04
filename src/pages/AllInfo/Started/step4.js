import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

export const Step4 = ({ step, setStep, formData, setFormData }) => {
  // const [hoursPerWeek, sethoursPerWeek] = useState({ min: "", max: "" })
  const [hoursPerJob, sethoursPerJob] = useState({ min: "", max: "" });
  const [checkB, setCheckB] = useState({ recurring: true, oneTime: false });
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);

  // useEffect(() => {
  //     setFormData({ ...formData, hoursPerWeek: hoursPerWeek })
  // }, [hoursPerWeek])

  useEffect(() => {
    setFormData({
      ...formData,
      jobType: checkB.recurring ? "recurring" : "one time",
    });
  }, [checkB]);

  useEffect(() => {
    setFormData({ ...formData, hoursPerJob: hoursPerJob });
  }, [hoursPerJob]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (hoursPerJob.min < hoursPerJob.max) {
      setStep(++step);
    } else {
      hoursPerJob.min = "";
      hoursPerJob.max = "";
      alert("min hours should less than max hours");
     
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <p className="text-muted px-3 pt-3">My Schedule works best with:</p>
      <Form.Group controlId="formBasicName" className=" p-3 mb-0">
        <Row
          style={
            !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
              ? { marginBottom: "10vh" }
              : {}
          }
        >
          <Col xs={12}>
            <Form.Group controlId="" className="w-100">
              <Form.Label
                className="text-dark"
                onClick={() =>
                  setCheckB({
                    oneTime: !checkB.oneTime,
                    recurring: !checkB.recurring,
                  })
                }
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/icons/${
                      checkB.recurring ? "bluecheck" : "grey"
                    }.png`
                  }
                  alt=""
                />
                Recurring Jobs
              </Form.Label>{" "}
              <br />
              <Form.Label className="text-muted">Hours per Week</Form.Label>
              <div className="d-flex">
                {!checkB.recurring ? (
                  <>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.recurring}
                      placeholder="Mins"
                      className="w-25 p-4 text-center"
                    />
                    <p className="OR">
                      <span></span>
                    </p>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.recurring}
                      placeholder="Max"
                      className="w-25 p-4 text-center"
                    />
                  </>
                ) : (
                  <>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.recurring}
                      min="1"
                      max="70"
                      placeholder="min"
                      className="w-25 p-4 text-center"
                      value={hoursPerJob.min}
                      onChange={(e) =>
                        sethoursPerJob({ ...hoursPerJob, min: e.target.value })
                      }
                    />
                    <p className="OR">
                      <span></span>
                    </p>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.recurring}
                      min="1"
                      max="70"
                      placeholder="Max"
                      className="w-25 p-4 text-center"
                      value={hoursPerJob.max}
                      onChange={(e) =>
                        sethoursPerJob({ ...hoursPerJob, max: e.target.value })
                      }
                    />
                  </>
                )}
              </div>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="" className="w-100">
              <Form.Label
                className="text-dark"
                onClick={() =>
                  setCheckB({
                    recurring: !checkB.recurring,
                    oneTime: !checkB.oneTime,
                  })
                }
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/icons/${checkB.oneTime ? "bluecheck" : "grey"}.png`
                  }
                  alt=""
                />
                One-Time Job
              </Form.Label>
              <br />
              <Form.Label className="text-muted">Hours per Job</Form.Label>
              <div className="d-flex">
                {!checkB.oneTime ? (
                  <>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.oneTime}
                      placeholder="Min"
                      className="w-25 p-4 text-center"
                    />
                    <p className="OR">
                      <span></span>
                    </p>
                    <Form.Control
                      required
                      type="number"
                      disabled={!checkB.oneTime}
                      placeholder="Max"
                      className="w-25 p-4 text-center"
                    />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <Form.Control
                      required
                      type="number"
                      min="1"
                      max="10"
                      disabled={!checkB.oneTime}
                      placeholder="Min"
                      className="w-25 p-4 text-center"
                      value={hoursPerJob.min}
                      onChange={(e) =>
                        sethoursPerJob({ ...hoursPerJob, min: e.target.value })
                      }
                    />
                    <p className="OR">
                      <span></span>
                    </p>
                    <Form.Control
                      required
                      type="number"
                      min="1"
                      max="10"
                      disabled={!checkB.oneTime}
                      placeholder="Max"
                      className="w-25 p-4 text-center"
                      value={hoursPerJob.max}
                      onChange={(e) =>
                        sethoursPerJob({ ...hoursPerJob, max: e.target.value })
                      }
                    />
                  </>
                )}
              </div>
            </Form.Group>
          </Col>
          {/* <Col xs={12} >
                    <Form.Group controlId="" className="w-100">
                        <Form.Label className="text-dark">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                    Families of Corporate Clients</Form.Label><br />

                    </Form.Group>
                </Col> */}
        </Row>
      </Form.Group>

      <Form.Group className="w-100 d-flex footer-thing">
        <Button
          variant="flat"
          type="button"
          className="p-2 w-25 ml-auto"
          onClick={() => setStep(--step)}
        >
          &lt; Back
        </Button>
        <Button
          variant="flat"
          type="submit"
          className="btn-flat2 w-25 p-2 mx-3"
          //  onClick={() => setStep(++step)}
        >
          Next
        </Button>
      </Form.Group>
      <hr />
      <p className="blowtxt">
        Ongstercare.com does not employ, and is not responsible for any care
        provider or care seeker. you are responsible for selecting caregiver or
        job and for complying with all applicable laws. Ongstercare.com does not
        generator or verify information in profile, job posts or applications.
      </p>
    </Form>
  );
};
