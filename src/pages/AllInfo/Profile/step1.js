import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import SimpleSelect from "../../../components/select";
import RangeSlider from "../../../components/range";

export const Step1 = ({ step, setStep, formData, setFormData }) => {
  let [countChild, setCountChild] = useState(1);
  const [value, setValue] = useState([20, 37]);
  const [options, setOptions] = useState([]);

  function valuetext(value) {
    return {
      min: `${value[0]}$`,
      max: `${value[1]}$`,
    };
  }
  const handleCategory = (val) => {
    setFormData({ ...formData, categoryId: val });
  };

  const handleHelpOption = (val) => {
    setFormData({ ...formData, helpOption: val });
    console.log(val)
  };

  useEffect(() => {
    setFormData({ ...formData, hourlyRate: valuetext(value) });
  }, [value]);

  useEffect(() => {
    setFormData({ ...formData, optionChild: countChild });
  }, [countChild]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStep(++step);
  };

  useEffect(() => {
    (async (_) => {
      try {
        const respJSON = await fetch(
          `https://api.ongstercare.com/get-category`
        );
        const resp = await respJSON.json();
        if (resp.success) {
          setOptions(
            resp.data.map((val) => ({ value: val.id, detail: val.name }))
          );
        }
      } catch (err) {
        console.log("useEffect-->step1", err);
      }
    })();
  }, []);

  return (
    <Form onSubmit={handleOnSubmit} className="p-3">
      <Row>
        <Col xs={12}>
          <Form.Group controlId="" className=" mb-0 text-center">
            <RangeSlider
              title="Select Hourly Rates"
              value={value}
              setValue={setValue}
            />
            {/* <span className="text-capitalize">Average rate in your area is <span className="blue-text">17$/Hr</span></span> */}
            <hr />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group controlId="" className="w-100">
            <Form.Label className="text-muted">
              I am Confortable Caring for...
            </Form.Label>
            <p className="p-3 d-flex justify-content-between border border-silver align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/minus.png"}
                width="18"
                alt=""
                onClick={() => countChild >= 1 && setCountChild(--countChild)}
              />{" "}
              {countChild == 0 ? (
                <p>None</p>
              ) : countChild == 1 ? (
                <p>{countChild} child </p>
              ) : (
                <p>{countChild} Children </p>
              )}
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/plus.png"}
                alt=""
                height="15"
                onClick={() => countChild < 4 && setCountChild(++countChild)}
              />{" "}
            </p>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="w-100">
            <Form.Label
              style={
                /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                  ? { display: "none" }
                  : { visibility: "hidden" }
              }
            >
              Send Verification Code
            </Form.Label>
            <SimpleSelect
              required
              disabled={countChild == 0 ? true : false}
              label="New born time?"
              isMulti
              value={formData.categoryId}
              options={options}
              setValue={handleCategory}
            />
          </Form.Group>
          {/* <hr /> */}
        </Col>

        <Col xs={12}>
          <Form.Group className="w-100 ">
            <Form.Label className="text-muted">
              I am willing to help with
            </Form.Label>
            <SimpleSelect
              required
              disabled={countChild == 0 ? true : false}
              label="Select Options"
              options={[
                { value: "laundary", detail: "Laundary" },
                { value: "Cooking/meal prep", detail: "Cooking/meal prep" },
                { value: "Light housekeeping", detail: "Light housekeeping" },
                { value: "Grocery shopping", detail: "Grocery shopping" },
                { value: "Errands", detail: "Errands" },
                { value: "Carpool", detail: "Carpool" },
                { value: "Crafts", detail: "Crafts" },
                {
                  value: "Swimming Supervision",
                  detail: "Swimming Supervision",
                },
                { value: "Travel", detail: "Travel" },
              ]}
              isMulti
              value={formData.helpOption}
              setValue={handleHelpOption}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="w-100 d-flex ">
        <Button variant="flat" type="button" className="p-2 w-25 ml-auto">
          &lt; Back
        </Button>
        <Button
          variant="flat"
          type="submit"
          className="btn-flat2 w-25 p-2 ml-3"
        >
          Next
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
