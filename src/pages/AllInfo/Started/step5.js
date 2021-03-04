import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import MaterialUIPickers from "../../../components/datepicker";
import TimePickers from "../../../components/timepicker";

export const Step5 = ({ step, setStep, setStage, formData, setFormData }) => {
  const [availableToWork, setavailableToWork] = useState([]);

  const [timeSlots, setTimeSlots] = useState([{ value: { from: "", to: "" }, no: 1 }]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [days, setDays] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  useEffect(() => {
    setFormData({ ...formData, endDate: endDate });
  }, [endDate]);

  useEffect(() => {
    setFormData({ ...formData, startDate: startDate });
  }, [startDate]);

  useEffect(() => {
    // Object.keys(days).map(v => days[v] && setavailableToWork([{ ...availableToWork[0] ,[v]: timeSlots.map(va => va.value) }]))
    for (let ind in days) {
      if (days[ind]) {
        setavailableToWork([{ ...availableToWork[0], [ind]: timeSlots.map((va) => va.value) }]);
      } else {
        if (availableToWork[0] && availableToWork[0][ind]) {
          let old = [...availableToWork];
          delete old[0][ind];
          setavailableToWork(old);
        }
      }
    }
  }, [days]);

  useEffect(() => {
    setFormData({ ...formData, availableToWork: availableToWork });
  }, [availableToWork]);

  const [select, setSelect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDays = (val) => {
    // Object.keys(days).forEach(v => days[v] = false)
    setDays({ ...days, [val]: !days[val] });
  };

  const handleStep = async (e) => {
    try {
      if (formData.endDate == "") {
        throw alert("Enter End Date");
      }
      if (formData.startDate == "") {
        throw alert("Enter Start Date");
      }

      if (formData.startDate > formData.endDate) {
        throw alert("Start Date Should not Greater Than End Date");
      }

      // e.preventDefault();
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      formData.dob = user.birthday;
      formData.email = user.email;
      formData.additionalInformation = "Test";
      formData.firstName = user.firstname;
      formData.middleName = user.middlename;
      formData.lastName = user.lastname;
      formData.gender = user.gender;
      formData.howDidYouFindUS = "Social Media";
      formData.password = user.password;
      console.log(formData);
      const respJSON = await fetch("https://api.ongstercare.com/user-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resp = await respJSON.json();
      console.log(resp);
      console.log("response =====>", resp.token);
      localStorage.setItem("token1", resp.token);
      localStorage.setItem("res", resp);
      setStep(1);
      setStage(2);
      // if (resp.success) {
      //   setLoading(false);
      //   localStorage.setItem("userId", resp.user_id);
      // } else {
      //   if (typeof resp.message === "object") {
      //     alert(resp.message);
      //   } else {
      //     alert(resp.Message);
      //   }
      //   setLoading(false);
      // }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleTimeSlot = () => {
    const array = [...timeSlots];
    array.push({ value: { from: "", to: "" }, no: array.length + 1 });

    setTimeSlots(array);
  };

  return (
    <Form>
      <p className="text-muted px-3 pt-3">Tell families what you weekly shedule typically looks like. If needed, it's super easy to come back and edit it when you log back in.</p>
      <Form.Group controlId="formBasicName" className=" p-3 mb-0">
        <Row>
          <Col xs={12}>
            <Form.Group controlId="" className="w-100">
              <Form.Label className="text-dark text-capitalize">When Are you Availabe to work?</Form.Label>
              <div className="border border-silver p-3">
                <div className="d-flex justify-content-between m-auto pb-2 small">
                  {Object.keys(days).map((v, i) => {
                    return (
                      <p onClick={() => handleDays(v)} className="text-capitalize">
                        <img src={process.env.PUBLIC_URL + `/assets/icons/${days[v] ? "bluecheck" : "grey"}.png`} alt="" />
                        {v.slice(0, 3)}
                      </p>
                    );
                  })}
                </div>
                <Form.Group className="">
                  {timeSlots.map((val, i) => {
                    return (
                      <div key={i} className="d-flex">
                        <TimePickers timeSlots={timeSlots} setTimeSlots={setTimeSlots} currentIndex={i} />
                        <TimePickers isTo timeSlots={timeSlots} setTimeSlots={setTimeSlots} currentIndex={i} />
                      </div>
                    );
                  })}
                  <div className="d-flex align-items-center justify-content-between">
                    <p
                      className="small text-muted"
                      onClick={() => {
                        let a = [...timeSlots];
                        if (a.length > 1) {
                          a.pop();
                          setTimeSlots(a);
                        }
                      }}
                    >
                      <img src={process.env.PUBLIC_URL + `/assets/icons/${select ? "bluecheck" : "grey"}.png`} alt="" />
                      {/* {select ? "Select         " : "UnSelect"} */}
                      UnSelect
                    </p>
                    {timeSlots.length < 3 && (
                      <p className="blue-text pointer-event" onClick={() => handleTimeSlot()}>
                        {" "}
                        + Add time slot
                      </p>
                    )}
                    <p className="w-25"></p>
                  </div>
                </Form.Group>
              </div>
            </Form.Group>
            <hr />
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="" className="w-100 mb-0">
              <Form.Label className="text-dark">Additional Information</Form.Label> <br />
              <Form.Label className="text-muted mb-0">Start Date</Form.Label>
            </Form.Group>
            <MaterialUIPickers setDate={setStartDate} minDate={new Date()} />
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="" className="w-100 mb-0">
              <Form.Label className="text-dark" style={{ visibility: "hidden" }}>
                Additional Information
              </Form.Label>{" "}
              <br />
              <Form.Label className="text-muted mb-0">End Date</Form.Label>
            </Form.Group>
            <MaterialUIPickers setDate={setEndDate} minDate={new Date()} />
          </Col>

          <Col xs={12}>
            <Form.Group controlId="" className="my-3">
              <FormControl
                as="textarea"
                aria-label="With textarea"
                placeholder="Additional details"
                rows={4}
                value={formData.additionalInformation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalInformation: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="w-100 d-flex">
        <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
          &lt; Back
        </Button>
        <Button
          variant="flat"
          // type="submit"
          className="btn-flat2 p-2 mx-3"
          disabled={loading}
          onClick={handleStep}
        >
          Save &amp; Continue
        </Button>
      </Form.Group>
      <hr />
      <p className="blowtxt">
        Ongstercare.com does not employ, and is not responsible for any care provider or care seeker. you are responsible for selecting caregiver or job and for complying with all
        applicable laws. Ongstercare.com does not generator or verify information in profile, job posts or applications.
      </p>
    </Form>
  );
};
