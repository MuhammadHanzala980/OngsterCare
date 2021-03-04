import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

export const Step8 = ({ step, setStep, setStage, formData, setFormData }) => {
  const [loading, setLoading] = React.useState(false);
  const [previewProfile, setPreviewProfile] = React.useState(null);
  const [profileImage, setImage] = React.useState(null);

  const handleStep = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId");
      var form_data = new FormData();

      for (var key in formData) {
        // if (typeof (formData[key]) === "object") {
        if (key === "categoryId") {
          form_data.append(key, formData[key].join());
          // }
          // else {
          //     form_data.append(key, JSON.stringify(formData[key]));
          // }
        } else if (key === "hourlyRate") {
          form_data.append(key, JSON.stringify(formData[key]));
        } else {
          form_data.append(key, formData[key]);
        }
      }
      if (!!profileImage) {
        form_data.append("image", profileImage);
      }
      form_data.append("userId", userId);

      const respJSON = await fetch("https://api.ongstercare.com/user-profile", {
        method: "POST",
        body: form_data,
      });
      const resp = await respJSON.json();

      // console.log(resp)
      // replaced resp.success to resp because in resp erro goes.
      if (resp) {
        setLoading(false);
        setStep(1);
        setStage(4);
      } else {
        // console.log(resp)
        alert(resp.message);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err, "fdf");
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
  //remove image button to remove selected image
  const removeImage = () => {
    const file = document.getElementById("file");
    file && file.click();
  };

  // console.log(formData)

  return (
    <Form className="p-3" onSubmit={handleStep}>
      <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "18vh" } : {}}>
        <Col xs={12}>
          <input id="file" type="file" accept="image/x-png,image/gif,image/jpeg" style={{ display: "none" }} onChange={test} />
          <div className="my-3">
            {previewProfile ? <img alt="" id="photo_id" /> : <img src={process.env.PUBLIC_URL + "/assets/icons/upload.png"} alt="" />}
            <Button variant="flat" className="mx-3 my-2 btn-flat1" onClick={triggerImageUpload}>
              Upload Image
            </Button>
            <br />
            {/* <Button  variant="flat" className="mx-3 my-2 btn-flat1" onClick={removeImage}>Remove Image</Button> */}
          </div>
        </Col>
        <Col xs={12}>
          <p>You're 7x more likely to get hired with a profile photo. To got started, follow our photo guidelines carefully so we can approve your photo quickly.</p>
          <hr />
        </Col>
        <Col xs={12}>
          <p className="blowtxt p-0">
            Photos may not include nudity ,violet or offensive material or copyrighted Images to which you do not have rights.if your photo includes children by uploading and
            clicking Continue, you verify that you are the parent or that you have explicit permission of the parent’s to include the children in your photo
          </p>
        </Col>
      </Row>

      <Form.Group className="w-100 d-flex">
        <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(6)}>
          &lt; Back
        </Button>
        <Button variant="flat" type="submit" className="btn-flat2 p-2 mx-3" onClick={handleStep} disabled={loading || !profileImage}>
          Save &amp; Continue
        </Button>
      </Form.Group>
      <hr />
      <p className="blowtxt p-0">
        Ongstercare.com does not employ, and is not responsible for any care provider or care seeker. you are responsible for selecting caregiver or job and for complying with all
        applicable laws. Ongstercare.com does not generator or verify information in profile, job posts or applications.
      </p>
    </Form>
  );
};
