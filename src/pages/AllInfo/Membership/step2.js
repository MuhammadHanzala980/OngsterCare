import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import MaterialUIPickers from "../../../components/datepicker";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const useStyles = makeStyles({});

export const Step2 = ({ step, setStep, setStage }) => {
  const classes = useStyles();
  const history = useHistory();
  const [nameCard, setNameCard] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [zip, setZip] = useState("");
  const [bill, setBill] = useState("");
  const [order, setOrder] = useState("");
  const [dob, setDob] = React.useState("");
  var userId = localStorage.getItem("userId");
  const handleStep = () => {
    history.push("/");
    // setStep(1);
    // setStage(1);
  };

  const submitCard = () => {
    console.log("setDob =>", dob);
    var mon = dob.slice(0, 2);
    var year = dob.slice(4);
    console.log(
      Boolean(userId),
      Boolean(cardNum),
      Boolean(cvv),
      Boolean(bill),
      Boolean(mon),
      Boolean(year)
    );
    // if (
    //   // !userId ||
    //   !cardNum ||
    //   !cvv ||
    //   !bill ||
    //   !mon ||
    //   !year
    // ) {
    //   alert("plz fill all Input");
    // }
    console.log(Boolean(userId), cardNum, cvv, bill, mon, year);
    var bod = {
      name: "affan",
      cardNo: cardNum,
      expMon: mon,
      expYear: year,
      cvc: cvv,
      billingZipCode: bill,
      userId: "assaa",
    };
    fetch(`https://api.ongstercare.com/payment`, {
      method: "POST",
      body:bod,
    })
      .then((resp) => resp.json)
      .then((re) => {
        // alert(re.message);
        console.log(re, "@@@@");
        swal({
          title: "Correct!",
          text: "Yor have purchased",
          icon: "success",
        });
        setStep(++step);
      })
    .catch((err) => {
      console.log(err);
      swal({
        title: "Wrong",
        text: "Provide correct Information",
        icon: "warning",
      });
      setStep(++step);
    });

    // fetch("https://api.ongstercare.com/payment", {
    //   method: "POST",
    //   body: bod,
    // })
    //   .then((res) => res.json())
    //   .then((res1) => {
    //     console.log(res1);
    //     if (!res1.success) {
          // swal({
          //   title: "Wrong",
          //   text: "Provide correct Information",
          //   icon: "warning",
          // });

    //       swal({
    //         title: "Correct!",
    //         text: "Yor have purchased",
    //         icon: "success",
    //       });
         
    //     } else {
    //       swal({
    //         title: "Correct!",
    //         text: "Yor have purchased",
    //         icon: "success",
    //       });
         
    //     }
    //     setStep(++step);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setStep(++step);
    //   });
  };
  return (
    <Form className="p-3">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">Name On Card</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name On Card"
              className="w-100 p-4"
              value={nameCard}
              onChange={(e) => setNameCard(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">Credit Card Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Credit Card Number"
              className="w-100 p-4"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
            />
          </Form.Group>
        </Col>

        {/* <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100 mb-0">
            <Form.Label className="text-muted ">Expiry Date</Form.Label>
          </Form.Group>
          <MaterialUIPickers width="100%" setDate={setDob} />
        </Col> */}
        <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">Card Expiry</Form.Label>
            <Form.Control
              type="tele"
              placeholder="MM/YY"
              className="w-100 p-4"
              value={dob}
              maxLength="6"
              onChange={(e) => {
                setDob(
                  e.target.value
                  // .replace(/[^\dA-Z]/g, "")
                  // .replace(/(.{2})/g, "$1 /")
                );
                if (dob.length == 2) {
                  setDob(
                    e.target.value
                      .replace(/[^\dA-Z]/g, "")
                      .replace(/(.{2})/g, "$1 /")
                  );
                }
              }}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">CVV</Form.Label>
            <Form.Control
              type="tele"
              placeholder=""
              className="w-100 p-4"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">Billing Zip Code</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className="w-100 p-4"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Col xs={12} className="border border-silver ">
            <p className="text-uppercase pt-3 text-center">Order summary</p>
            <hr />
            <Row>
              <Col xs={12} md={6} className="mstep1">
                <p className="px-0 pt-0 blowtxt">
                  Ongstercare.com does not employ, and is not responsible for
                  any care provider or care seeker. you are responsible for
                  selecting caregiver or job and for complying with all
                  applicable laws. Ongstercare.com does not generator or verify
                  information in profile, job posts or applications.{" "}
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex justify-content-between">
                  <p>Background Screening</p>
                  <p>$15.99</p>
                </div>
                {/* <div className="d-flex justify-content-between">
                                <p>$7.99 Discount</p>
                                <p>-$7.99</p>
                            </div> */}
                <div className="d-flex justify-content-between">
                  <p>Sale tax (0%)</p>
                  <p>$0.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <p>$15.99</p>
                </div>
                {/* <p className="blue-text small mb-3"><u>
                                $7.99 Discount Applies to First Month
                                </u></p> */}
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>

      <Form.Group className="w-100 d-flex my-3">
        <Button
          variant="flat"
          //   type="submit"
          className="btn-flat2 ml-auto p-2 mx-3"
          //   onClick={handleStep}

          onClick={submitCard}
        >
          Purchase
        </Button>
      </Form.Group>
      <hr />
      <p className="p-0 blowtxt ">
        Ongstercare.com does not employ, and is not responsible for any care
        provider or care seeker. you are responsible for selecting caregiver or
        job and for complying with all applicable laws. Ongstercare.com does not
        generator or verify information in profile, job posts or applications.
      </p>
    </Form>
  );
};
