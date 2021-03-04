import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import MaterialUIPickers from "../../components/datepicker";

export const GenralInfo = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group controlId="firstName" className="">
              <Form.Label className="text-muted">First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="middleName" className="">
              <Form.Label className="text-muted">Middle Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Middle Name"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="lastName" className="">
              <Form.Label className="text-muted">Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="" className="w-100">
              <Form.Label className="text-dark">Mailing Address</Form.Label>
              <FormControl
                required
                as="textarea"
                aria-label="With textarea"
                placeholder=""
                rows={4}
                // value={formData.additionalInformation} onChange={(e) => setFormData({ ...formData, "additionalInformation": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="city" className="">
              <Form.Label className="text-muted">City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="state" className="">
              <Form.Label className="text-muted">State</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="State"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="zip" className="">
              <Form.Label className="text-muted">Zip</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Zip"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="email" className="">
              <Form.Label className="text-muted">Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email Address"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="alternativeNumber" className="">
              <Form.Label className="text-muted">Alternative Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Alternative Number"
                className="p-4"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <p className="p-3 cursor-pointer text-center bg-light">
              Change Password
            </p>
          </Col>

          <Col xs={12}>
            <p>Social Network</p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/facebook2.png"}
                alt=""
              />
              <span className="text-muted mx-2 ">Facebook</span>
              <span className="blue-text ml-2">Verify Now</span>
            </p>
          </Col>
          <Col xs={12}>
            <Form.Group className="w-100 d-flex">
              <p type="button" className="p-2 ml-auto text-center">
                <Link
                  to="/best-match"
                  className="text-decoration-none text-dark"
                >
                  &lt; Back
                </Link>
              </p>
              <Button
                variant="flat"
                type="submit"
                className="pt-2 px-5 mx-3"
                // onClick={handleStep}
                // disabled={loading || !profileImage}
              >
                Save
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export const Membership = () => {
  return (
    <Row>
      <Col xs={0} md={2}></Col>
      <Col xs={12} md={8}>
        <Row className="m-2 text-center">
          <Col xs={4} className="py-3">
            <p>
              <span>Member Since :</span>
              <span>September 2020</span>
            </p>
          </Col>
          <Col xs={4} className="px-0 py-3">
            <p>
              <span>Account Status :</span>
              <span className="blue-text">Active</span>
            </p>
          </Col>
          <Col xs={4} className="px-0 py-3">
            <p>
              <span>Membership Plan :</span>
              <span className="blue-text">Basic</span>
            </p>
          </Col>

          <Col xs={12}>
            <p className="p-3 cursor-pointer text-center bg-light">
              Closed Account
            </p>
          </Col>
          <Col xs={12}>
            <p className="p-3">Upgrade Plan</p>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <div
              style={{
                height: 200,
                width: 210,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div>
                <p className="text-muted small">1 Month</p>
                <p style={{ fontSize: "2.5rem" }}>$30</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <div
              style={{
                height: 200,
                width: 210,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                backgroundColor: "#28ace2",
              }}
            >
              <div
                className="bg-white rounded-circle"
                style={{ width: 100, height: 100 }}
              >
                <p className="text-muted small mt-2">3 Month</p>
                <p style={{ fontSize: "2.5rem" }}>$90</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <div
              style={{
                height: 200,
                width: 210,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div>
                <p className="text-muted small">12 Month</p>
                <p style={{ fontSize: "2.5rem" }}>$190</p>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <Form.Group className="w-100 d-flex pt-3 my-3">
              <p type="button" className="p-2 ml-auto text-center">
                <Link
                  to="/best-match"
                  className="text-decoration-none text-dark"
                >
                  &lt; Back
                </Link>
              </p>
              <Button
                variant="flat"
                type="submit"
                className="pt-2 px-5 mx-3"
                // onClick={handleStep}
                // disabled={loading || !profileImage}
              >
                Save
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2}></Col>
    </Row>
  );
};

export const EditPreferences = () => {
  return (
    <Row>
      <Col xs={0} md={2}></Col>
      <Col xs={12} md={8}>
        <Row className="m-2">
          {/* <Col xs={12}>
                        <p className="p-3 cursor-pointer text-center bg-light">Edit Preference</p>
                    </Col> */}

          <Col xs={12}>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Email me about OngsterCare.com features, services, special offers,
              and other cool stuff.
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Email me newsletters with personal stories, topical articles,
              discussions, tips, and more.
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Email me about new caregivers near me who have recently joined
              OngsterCare.com.
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Share my online status with other members of OngsterCare.com.{" "}
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Send read receipts with messages.{" "}
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Make my profile and job posts public. (?){" "}
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Include my profile in caregiver search results and certain
              caregiver emails.{" "}
            </p>
            <p className="p-2">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
              />{" "}
              Allow caregivers to see that I viewed their profile.{" "}
            </p>
            <p className="p-2 d-flex">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"}
                alt=""
                width="20"
                height="19"
              />{" "}
              <p>
                &nbsp;Share information about me with third party communication
                facilitators so they may send me direct mail solicitations on
                behalf of other companies. (?){" "}
              </p>{" "}
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2}></Col>
    </Row>
  );
};

export const BlockedMembers = () => {
  return (
    <Row>
      <Col xs={0} md={2}></Col>
      <Col xs={12} md={8}>
        <Row className="m-2">
          <Col xs={12}>
            <div
              style={{
                textAlign: "center",
                transform: "translateY(20%)",
                height: "40vh",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/blocked-user.png"}
                alt=""
              />
              <p className="py-2">No Member Blocked</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2}></Col>
    </Row>
  );
};
export const CreditCard = () => {
  const [startDate, setStartDate] = useState("");
  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="firstName" className="mb-2">
              <Form.Label className="text-muted">First Name On Card</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="lastName" className="mb-2">
              <Form.Label className="text-muted">Last Name On Card</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="cardNumber" className="">
              <Form.Label className="text-muted">Credit Card Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="XXXX-XXXX-XXXX-XX"
                minLength="12"
                maxLength="12"
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          {/* <Col xs={12} md={5}>
                        <Form.Group controlId="expiryDate" className="mb-0">
                            <Form.Label className="text-muted">Expiry Date</Form.Label>

                        </Form.Group>
                        <MaterialUIPickers setDate={setStartDate} width />
                    </Col> */}

          <Col xs={12} md={6}>
            <Form.Group controlId="" className="w-100">
              <Form.Label className="text-muted">Expiry Date</Form.Label>
              <Form.Control
                type="tele"
                placeholder="MM/YY"
                className="w-100 p-4"
                value={startDate}
                maxLength="6"
                onChange={(e) => {
                  setStartDate(
                    e.target.value
                    // .replace(/[^\dA-Z]/g, "")
                    // .replace(/(.{2})/g, "$1 /")
                  );
                  if (startDate.length == 2) {
                    setStartDate(
                      e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .replace(/(.{2})/g, "$1 /")
                    );
                  }
                }}
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <hr />
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="billAddress" className="">
              <Form.Label className="text-muted">Billing Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                className="p-4 w-100"
                // value={formData.firstName} onChange={(e) => setFormData({ ...formData, "firstName": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="" className="w-100 mb-3">
              <Form.Label>Billing Zip Code</Form.Label>
              <Form.Control
                required="true"
                type="number"
                placeholder=""
                className="w-100"
                style={{ padding: "1.66rem" }}
                //value={formData.zipCode} onChange={(e) => setFormData({ ...formData, "zipCode": e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="w-100 d-flex">
              <p
                type="button"
                className="p-2 ml-auto text-center"
                style={{ width: "10vw" }}
              >
                <Link
                  to="/best-match"
                  className="text-decoration-none text-dark"
                >
                  Back
                </Link>
              </p>
              <Button
                variant="flat"
                type="submit"
                className="pt-2 px-5 mx-3"
                // onClick={handleStep}
                // disabled={loading || !profileImage}
              >
                Save
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
