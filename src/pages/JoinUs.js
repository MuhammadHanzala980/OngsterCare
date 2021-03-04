import React from "react";
import { Button, Row, Col, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import TraModal from "../components/Models/popup";
import SimpleSelect from "../components/select";
import MaterialUIPickers from "../components/datepicker";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment";
import imageToBase64 from "image-to-base64";
export const JoinUs = ({ careSeeker, setCareSeeker }) => {
  const [emailErr, setError2] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [selectOptions, setSelectOp] = React.useState([{ value: "somene told me.", detail: "somene told me." }]);
  const [findUs, setFindUs] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [profileImage, setImage] = React.useState(null);
  const [previewProfile, setPreviewProfile] = React.useState(null);
  // maxDate={moment().subtract(18, "years").calendar()}
  const [passErr, setError] = React.useState();

  React.useEffect(() => {
    setFormData({ ...formData, birthday: dob });
  }, [dob]);

  // React.useEffect(() => {
  //     setFormData({ ...formData, howDidYouFindUS: findUs });
  // }, [findUs])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleGender = (val) => {
    setFormData({ ...formData, gender: val });
  };

  const handleFormData = (val) => {
    var form_data = new FormData();
    if (!!profileImage) {
      form_data.append("image", profileImage);
    }
    // for (var key in val) {
    //   form_data.append(key, val[key]);
    // }
    return form_data;
  };

  const validatePass = (e) => {
    setFormData({ ...formData, password: e.target.value });
    let regex = /^[a-z0-9]+$/;
    let str = e.target.value;

    if (str.length > 6 && regex.test(str)) {
      setError("");
    } else {
      setError("min 7 alphanumerical characters only");
    }
  };
  const check = () => {
    alert("try karo bhai");
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = async (e) => {
    if (dob == "") {
      throw alert("Enter Date of Birth");
    }
    try {
      e.preventDefault();
      setLoading(true);

      var file = document.getElementById("file").files[0];
      console.log(file);
      let idCardBase64 = "";
      getBase64(file, (result) => {
        idCardBase64 = result;
        //  console.log( idCardBase64)
      });

      const respJSON = await fetch("https://api.ongstercare.com/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const resp = await respJSON.json();
      // console.log(respJSON)
      // console.log(resp)

      if (resp.success) {
        setError2("");

        const ImageObj = {
          image: idCardBase64,
        };

        console.log(ImageObj);

        const resImage = await fetch("https://api.ongstercare.com//upload-image", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ImageObj),
        });

        const respImage = await resImage.json();

        console.log("Upload", respImage.url);

        setFormData({ ...formData, url: respImage.url });

        const respJSON = await fetch("https://api.ongstercare.com/careseeker-registration", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // console.log("form_data =>", form_data);
        const resp = await respJSON.json();
        console.log(resp);
        console.log(resp);
        if (resp.success) {
          setFormData({
            email: "",
            password: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            streetAddress: "",
            zipCode: "",
            image: null,
          });
          setImage(null);
          setPreviewProfile(null);
          setLoading(false);
        } else {
          console.log(resp);
          alert(resp.message);
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError2(resp.message);
      }
    } catch (err) {
      alert("catch it bot");
      setLoading(false);
      console.log(err);
    }
  };

  const test = () => {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();

    if (!!file) {
      setImage(file);
      reader.onload = function (e) {
        var image = document.getElementById("photo_id");
        image.src = e.target.result;
      };
      setPreviewProfile(true);
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    const file = document.getElementById("file");
    file && file.click();
  };

  return (
    <div>
      <TraModal open={open} setOpen={setOpen} setCareSeeker={setCareSeeker} />

      <Header handleOpen={handleOpen} noJoin />
      <Row className="main">
        <Col className="p-5 mx-5">
          <div className="d-flex justify-content-between text-white w-75 m-auto pb-2 upper-main">
            <p>
              <img src={process.env.PUBLIC_URL + "/assets/icons/noun_Check Mark_3505600.png"} alt="" />
              Post Job
            </p>
            <p>
              <img src={process.env.PUBLIC_URL + "/assets/icons/noun_Check Mark_3505600.png"} alt="" />
              Refine your Search
            </p>
            <p>
              <img src={process.env.PUBLIC_URL + "/assets/icons/noun_Check Mark_3505600.png"} alt="" />
              Get Access to reviews
            </p>
            <p>
              <img src={process.env.PUBLIC_URL + "/assets/icons/noun_Check Mark_3505600.png"} alt="" />
              View Provider pofiles
            </p>
          </div>
          <div className="p-5 inner-main">
            <div className="d-flex align-items-center">
              {careSeeker && (
                <IconButton aria-label="add to favorites" style={{ outline: "none" }} onClick={() => setCareSeeker(!careSeeker)}>
                  <ArrowBackIosIcon />
                </IconButton>
              )}
              <h2 id="transition-modal-title">
                <i>Its Free To Join.</i>
              </h2>
            </div>
            <hr />
            {careSeeker || false ? (
              // <Form onSubmit={handleSubmit}>
              <Form>
                <Form.Group controlId="formBasicJob">
                  <Form.Text className="text-muted">What would you like to do?*</Form.Text> <br />
                  <Row>
                    <Col xs={12}>
                      <input id="file" type="file" accept="image/x-png,image/gif,image/jpeg" style={{ display: "none" }} onChange={test} />
                      <div className="my-3">
                        {previewProfile ? (
                          <img alt="" id="photo_id" width="120" height="120" className="rounded-circle" />
                        ) : (
                          <img src={process.env.PUBLIC_URL + "/assets/icons/upload.png"} alt="" />
                        )}
                        <Button variant="flat" className="mx-3 my-2 btn-flat1" onClick={triggerImageUpload}>
                          Upload Image
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {/* <div className="d-flex justify-content-between">
                                            <Button variant="flat" className="btn-flat1 w-40 p-2">
                                                <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                                        Find a Caregiver</Button>

                                            <Form.Control type="text" placeholder="Apply to Job" className="w-40 p-4" />
                                        </div> */}
                </Form.Group>
                {/* <hr /> */}

                {/* <Form.Group
                  controlId="formBasicName"
                  className="d-flex justify-content-between"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    className="w-40 p-4"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    className="w-40 p-4"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                  />
                </Form.Group> */}
                {/* <Form.Group
                  controlId="formBasicName"
                  className="d-flex justify-content-between"
                >
                  <Form.Control
                    required
                    type="tele"
                    placeholder="Last Name"
                    className="w-40 p-4"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  <div className="w-40">
                    <PhoneInput
                      inputStyle={{
                        padding: "1.5rem 3rem",
                        width: "100%",
                      }}
                      country={"us"}
                      // value={formData.phone}
                      // onChange={(phone) => setFormData({ ...formData, "phone": phone })}
                    />
                  </div>
                </Form.Group> */}

                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="" className="w-100">
                      <Form.Label></Form.Label>
                      {/* <GoogleMaps  // required
                        /> */}
                      <Form.Control
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-100 p-4"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="" className="w-100">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Middle Name"
                        className="w-100 p-4"
                        value={formData.middleName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            middleName: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicEmail" className="">
                      <Form.Control
                        required
                        type="tele"
                        placeholder="Last Name"
                        className="w-100 p-4"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicPass" className="">
                      {/* <Form.Control
                        required
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                        className="w-100 p-4"
                        value={formData.password}
                        onChange={(e) => validatePass(e)}
                      /> */}
                      <div className="w-100">
                        <PhoneInput
                          inputStyle={{
                            padding: "1.5rem 3rem",
                            width: "100%",
                          }}
                          country={"us"}
                          // value={formData.phone}
                          // onChange={(phone) => setFormData({ ...formData, "phone": phone })}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Date of Birth</Form.Label>
                      {/* <Form.Control type="text" placeholder="DOB" className="w-100 p-4" /> */}
                      <MaterialUIPickers maxDate={moment().subtract(18, "years").calendar()} width="100%" md={true} setDate={setDob} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicName" className=" mx-1">
                      <Form.Label>Select Gender</Form.Label>
                      <div className="d-flex justify-content-between ">
                        {/* <p
                          style={{
                            width: "20%",

                            textAlign: "center",
                          }}
                          className={`${
                            formData.gender === "M" && "gender-active"
                          } gender border border-silver`}
                          onClick={(e) =>
                            setFormData({
                              ...formData,
                              gender: e.target.innerText,
                            })
                          }
                        >
                          M
                        </p>
                        <p
                          style={{
                            width: "20%",
                            
                            textAlign: "center",
                          }}
                          className={`${
                            formData.gender === "F" && "gender-active"
                          } border border-silver gender`}
                          onClick={(e) =>
                            setFormData({
                              ...formData,
                              gender: e.target.innerText,
                            })
                          }
                        >
                          F
                        </p>
                        <p
                          style={{
                            marginTop: "6%",
                            marginBottom: "6%",
                            textAlign: "center",
                          }}
                        ></p> */}

                        <div
                          style={{
                            width: "30%",
                            height: "1000%",
                            backgroundColor: "white",
                          }}
                          className={`${formData.gender === "F" && "gender-active"} gender border border-silver`}
                          onClick={(e) => {
                            setFormData({
                              ...formData,
                              gender: e.target.innerText,
                            });
                          }}
                        >
                          <p
                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                gender: e.target.innerText,
                              });
                            }}
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              textAlign: "center",
                            }}
                          >
                            F
                          </p>
                        </div>
                        <div
                          className={`${formData.gender === "M" && "gender-active"} gender border border-silver`}
                          onClick={(e) => {
                            setFormData({
                              ...formData,
                              gender: e.target.innerText,
                            });
                          }}
                          style={{
                            width: "30%",
                            height: "1000%",
                            backgroundColor: "white",
                          }}
                        >
                          <p
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              textAlign: "center",
                            }}
                            // onClick={(e) => {
                            //   setFormData({
                            //     ...formData,
                            //     gender: e.target.innerText,
                            //   });

                            //   alert(e.target.innerText);
                            // }}

                            onClick={(e) => {
                              setFormData({
                                ...formData,
                                gender: e.target.innerText,
                              });
                            }}
                          >
                            M
                          </p>
                        </div>
                        <div
                          style={{
                            width: "30%",
                            height: "1000%",
                            backgroundColor: "white",
                          }}
                        >
                          <p
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              textAlign: "center",
                            }}
                          ></p>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="" className="w-100">
                      <Form.Label>Enter Street Address</Form.Label>
                      {/* <GoogleMaps  // required
                        /> */}
                      <Form.Control
                        required="true"
                        type="text"
                        placeholder=""
                        className="w-100 p-4"
                        value={formData.streetAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            streetAddress: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="" className="w-100">
                      <Form.Label>City, State or Zip Code</Form.Label>
                      <Form.Control
                        required="true"
                        type="text"
                        placeholder=""
                        className="w-100"
                        style={{ padding: "1.66rem" }}
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicEmail" className="">
                      <Form.Control
                        required
                        autoComplete="off"
                        type="email"
                        placeholder="Email"
                        className="w-100 p-4"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {!!emailErr && <Form.Text className="text-danger">{emailErr}</Form.Text>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicPass" className="">
                      <Form.Control
                        required
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                        className="w-100 p-4"
                        value={formData.password}
                        onChange={(e) => validatePass(e)}
                      />
                      {!!passErr && <Form.Text className="text-danger">{passErr}</Form.Text>}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="d-flex justify-content-between align-items-center dropdown-class">
                  {/* <DropdownButton className="w-40 border border-silver andar"
                                    variant="outline-muted"
                                    title="How do hear about us?">
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                        Active Item
        </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton> */}
                  <div className="w-40 ">{/* <SimpleSelect label="How did you find us?" options={selectOptions} onChange={setFindUs} /> */}</div>

                  <p>
                    <img src={process.env.PUBLIC_URL + "/assets/icons/pinkcheck.png"} alt="" />
                    Accept terms &amp; Conditions
                  </p>
                </Form.Group>

                <hr />

                <Button
                  variant="flat"
                  //   type="submit"
                  onClick={handleSubmit}
                  // onClick={check}
                  className="flat-btn1 w-100 p-3"
                  // disabled={loading || !profileImage}
                >
                  Join Nows
                </Button>
              </Form>
            ) : (
              <Form>
                <Form.Group controlId="formBasicJob">
                  <Form.Text className="text-muted">What would you like to do?*</Form.Text> <br />
                  <div className="d-flex justify-content-between">
                    <Button variant="flat" className="btn-flat1 w-40 p-2" onClick={() => setCareSeeker(!careSeeker)}>
                      <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" />
                      Find a Caregiver
                    </Button>

                    <Link to="/sign-up" className="text-dark" style={{ textDecoration: "none", display: "contents" }}>
                      <Button variant="flat" className="btn-flat1 w-40 p-2">
                        <img src={process.env.PUBLIC_URL + "/assets/icons/pinkcheck.png"} alt="" />
                        Find a Job
                      </Button>
                    </Link>
                  </div>
                </Form.Group>
              </Form>
            )}
          </div>
        </Col>
      </Row>

      <Footer />
      <style type="text/css">
        {`
                .main{
                    background-image: url('${process.env.PUBLIC_URL + "/assets/icons/Group 291.png"}');
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: middle;
                    background-color: white;
                }
                .inner-main{
                    background-color:white;
                }
                .btn-flat1 {
                    background-color: white;
                    border:1px solid #a2deed;
                    color: black;
                         }
                    .btn-flat1:hover {
                    background-color: #a2deed;
                    color: white;
                         }
                         .w-40{
                             width:40%
                         }
                         .andar button{
                             width:100%;
                             padding:1rem
                         }
            `}
      </style>
    </div>
  );
};
