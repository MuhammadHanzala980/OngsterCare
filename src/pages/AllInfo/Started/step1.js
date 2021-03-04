import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import MaterialUIPickers from "../../../components/datepicker";
import SimpleSelect from "../../../components/select";
import { Link } from "react-router-dom";
import SignUpSucces from "../../../components/Models/SignUpSucces";
import moment from "moment";
export const Step1 = ({ step, setStep, formData, setFormData }) => {
  const [dob, setDob] = React.useState(moment().subtract(18, "years").calendar());
  const [findUs, setFindUs] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [passErr, setError] = React.useState("");
  const [emailErr, setError2] = React.useState("");
  const [nameErr, setError3] = React.useState("");
  const [middleNameErr, setError4] = React.useState("");

  const [lasNmErr, setError5] = React.useState("");
  const [genderErr, setError6] = React.useState("");
  const [dobErr, setError7] = React.useState("");
  // const [emailErr, setError2] = React.useState("");

  const [selectOptions, setSelectOp] = React.useState([
    { value: "TV Ad", detail: "TV Ad." },
    {
      value: "Online Video (Hulu, Youtube)",
      detail: "Online Video (Hulu, Youtube)",
    },
    { value: "Banner Ad", detail: "Banner Ad" },
    { value: "Facebook", detail: "Facebook" },
    {
      value: "Search Engine (Google, Bing)",
      detail: "Search Engine (Google, Bing)",
    },
    { value: "Friends or Family", detail: "Friends or Family" },
    {
      value: "Other Social Media (Twitter, Instagram, Pinterest)",
      detail: "Other Social Media (Twitter, Instagram, Pinterest)",
    },
    { value: "Other", detail: "Other" },
  ]);

  // const isEmpty = (obj) => {
  //     for (let key in obj) {
  //       if (!obj[key])
  //         return true
  //     }
  //     return false;
  //   }

  React.useEffect(() => {
    setFormData({ ...formData, dob: dob });
  }, [dob]);
  React.useEffect(() => {
    setFormData({ ...formData, howDidYouFindUS: findUs });
  }, [findUs]);

  const handleOnSubmit = async (e) => {
    console.log(formData.gender);
    e.preventDefault();
    if (formData.email == "") {
      setError2("Enter Valid Email Address");
    } else if (formData.password == "") {
      setError("min 7 alphanumerical characters");
    } else if (formData.firstName == "") {
      setError3("Enter Full Name");
    } else if (formData.middleName == "") {
      setError4("Enter Middle Name");
    } else if (formData.lastName == "") {
      setError5("Enter Last Name");
    } else if (formData.gender == null) {
      setError6("Select A Gender");
    } else if (formData.dob == null) {
      setError7("Enter Dath Of Birth");
    } else {
      try {
        setError7("");

        const respJSON = await fetch("https://api.ongstercare.com/user-registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            gender: formData.gender,
            password: formData.password,
            dob: formData.dob,
            howDidYouFindUS: "------",
          }),
        });
        const resp = await respJSON.json();
        
        if (resp.success == true) {
          setOpen(true);
          // setStep(++step);
        } else {
          setError2(resp.message);
          // alert(`email ${resp.message}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validatePass = (e) => {
    setFormData({ ...formData, password: e.target.value });
    let regex = /^[0-9a-z]*$/;
    // /^(?=.*[a-z])(?=.*[A-Z]).{0,9}$/       /^[a-z0-9]+$/
    let str = e.target.value;
    let test = regex.test(str);
    //
    if (str.length > 6 && test) {
      setError("");
    } else {
    }
  };

  // console.log(formData)

  return (
    <>
      <Form>
        <div className="w-75 p-3">
          <Form.Group controlId="" className="for-resp">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required="true"
              type="email"
              placeholder="Enter Email"
              className="w-100 p-4"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setError2("");
              }}
            />
            {!!emailErr && <Form.Text className="text-danger">{emailErr}</Form.Text>}
          </Form.Group>
          <Form.Group controlId="" className="for-resp">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required="true"
              minLength={7}
              type="password"
              placeholder="Enter Password"
              className="w-100 p-4"
              value={formData.password}
              onChange={(e) => {
                validatePass(e);
                setError("");
              }}
            />
            {!!passErr && <Form.Text className="text-danger">{passErr}</Form.Text>}
          </Form.Group>
        </div>
        <Form.Group controlId="formBasicName" className="d-flex justify-content-between p-3 mb-0 for-resp">
          <Form.Group controlId="FName" className="for-resp">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="First Name"
              className="w-100 p-4"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
                setError3("");
              }}
            />
            {!!nameErr && <Form.Text className="text-danger">{nameErr}</Form.Text>}
          </Form.Group>
          <Form.Group controlId="MName" className="for-resp">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Middle Name"
              className="w-100 p-4"
              value={formData.middleName}
              onChange={(e) => {
                setError4("");
                setFormData({ ...formData, middleName: e.target.value });
              }}
            />
            {!!middleNameErr && <Form.Text className="text-danger">{middleNameErr}</Form.Text>}
          </Form.Group>
          <Form.Group controlId="LName" className="for-resp">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Last Name"
              className="w-100 p-4"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
                setError5("");
              }}
            />
            {!!lasNmErr && <Form.Text className="text-danger">{lasNmErr}</Form.Text>}
          </Form.Group>
        </Form.Group>
        <Row
        // style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "30vh" } : {}}
        >
          <Col xs={6} md={4}>
            <Form.Group controlId="" className=" mx-3">
              <Form.Label>Select Gender</Form.Label>
              <div className="d-flex justify-content-between ">
                <p
                  className={`${formData.gender === "M" && "gender-active"} gender border border-silver`}
                  onClick={(e) => {
                    setFormData({ ...formData, gender: e.target.innerText });
                    setError6("");
                  }}
                >
                  M
                </p>
                <p
                  className={`${formData.gender === "F" && "gender-active"} border border-silver gender`}
                  onClick={(e) => {
                    setFormData({ ...formData, gender: e.target.innerText });
                    setError6("");
                  }}
                >
                  F
                </p>
              </div>
              {!!genderErr && <Form.Text className="text-danger">{genderErr}</Form.Text>}
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group controlId="" className="mx-3">
              <Form.Label>Date of Birth</Form.Label>
              {/* <Form.Control type="text" placeholder="DOB" className="w-100 p-4" /> */}
              <MaterialUIPickers
                setDate={setDob}
                md={true}
                maxDate={moment().subtract(18, "years").calendar()}
                onChange={() => {
                  setError7("");
                }}
              />
              {!!dobErr && <Form.Text className="text-danger">{dobErr}</Form.Text>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="dropdown-resp mx-3">
              <Form.Label>How did you find us?</Form.Label>
              {/* <DropdownButton className="border border-silver andar"
                        variant="outline-muted"
                        title="How did you find us?" >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton> */}
              <SimpleSelect label="How did you find us?" required options={selectOptions} value={findUs} setValue={setFindUs} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="w-100 d-flex ">
          <Button variant="flat" type="button" className="p-2 w-25 ml-auto">
            <Link to="/" className="text-dark" style={{ textDecoration: "none" }}>
              &lt; Back
            </Link>
          </Button>
          <Button
            variant="flat"
            // type="submit"
            className="btn-flat2 w-25 p-2 mx-3"
            disabled={!!passErr}
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </Form.Group>
        <hr />
        <p className="blowtxt">
          Ongstercare.com does not employ, and is not responsible for any care provider or care seeker. you are responsible for selecting caregiver or job and for complying with
          all applicable laws. Ongstercare.com does not generator or verify information in profile, job posts or applications.
        </p>
      </Form>
      <SignUpSucces open={open} setOpen={setOpen} />
    </>
  );
};
