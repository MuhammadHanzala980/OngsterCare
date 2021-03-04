import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import camera from "../../../assest/images/camera.png";
import axios from "axios";
const DropZone = () => {
  return (
    <>
      <p>Dropzone value</p>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    // font-size: 2rem;
    // text-align: center !important;
    // margin-top: 10%;
    // color: #4aa1f3;
    // font-weight: bold;

    fontSize: 15,
    texyAlign: "center",
    // marginTop: "10%",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "lightgray",
  },
  content: {
    // background-color: white;
    // min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const Step3 = ({ step, setStep }) => {
  let [countChild, setCountChild] = useState(1);
  const [spacing, setSpacing] = React.useState(2);
  const [previewProfile, setPreviewProfile] = React.useState(null);
  const [previewProfie, setPreviewProfie] = React.useState(null);
  const [profileImage, setImage] = React.useState(null);
  const [profileImag1, setImag1] = React.useState(null);
  const classes = useStyles();

  const triggerImageUpload = () => {
    const file = document.getElementById("file");
    file && file.click();
  };

  const triggerImageUpload1 = () => {
    const file = document.getElementById("file1");
    file && file.click();
  };

  const scrrening = async () => {
    // alert("screening")

    // firstApi

    console.log("Screening>>>>>");

    let username = "ApiUserOngster";
    let password = "Sterling2020!";
    // let authString = `${username}:${password}`;
    var details = {
      userName: "ApiUserOngster",
      password: "Sterling2020",
      grant_type: "client_credentials",
    };

    // let headers = new Headers();
    // headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));

    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    // console.log(formBody);

    var options = {
      method: "POST",
      url: "https://api-int.kennect.com/v2/oauth",
      headers: { "content-type": "application/x-www-form-urlencoded",
    
      "allowed_cors_origins": ["http://localhost:3000"],
      "token_endpoint_auth_method": "none",},
      data: {
        grant_type: "client_credentials",
        client_id: "ApiUserOngster",
        client_secret: "Sterling2020!",
        audience: "https://api-int.kennect.com",
      },
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // fetch("https://api-int.kennect.com/v2/oauth", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //     authorization: "Basic" + " " + formBody,
    //   },
    //   body: formBody,
    // })
    //   .then((res) => console.log(res, "token"))
    //   .catch((err) => console.log(err));

    // const getToken = await fetch("https://api-int.kennect.com/v2/oauth", {
    //   method: "POST",

    //   headers: {
    //     authorization: "Basic",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    // }).then((res) => console.log(res, "TOKEN"));

    // const body = {
    //   clientReferenceId: "622258643a7-281d-4db8-ba7e-facdd04db422",
    //   givenName: "John",
    //   familyName: "Doe",
    //   email: "533228df3abd-9852-4ebc-8113-b7ffe200b6b078@dispostable.com",
    // };

    // fetch(`https://api-int.kennect.com/v2/packages`, {
    //   method: "GET",
    //   headers: {
    //     authorization:
    //       "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS51cy5zdGVybGluZ2NoZWNrLmFwcC92MiIsInN1YiI6IkFwaVVzZXJPbmdzdGVyIiwidXNlcklkIjoiQXBpVXNlck9uZ3N0ZXIiLCJjbGllbnROYW1lIjoiT25nc3RlciBDYXJlIiwiY3VzdG9tZXJJZCI6IjEzNzA1IiwidHJhZGluZ1BhcnRuZXJOYW1lIjoiT25EZW1hbmRUUCIsInRyYWRpbmdQYXJ0bmVyR3JvdXAiOiJPbkRlbWFuZCIsImludGVncmF0aW9uSWQiOjQ3MzYsInBsYXRmb3JtSWQiOiJzZCIsImdhdGV3YXlFbmFibGVkIjpmYWxzZSwiaWF0IjoxNjEyOTU3NDUyLCJleHAiOjE2MTI5OTM0NTJ9.u9TpNdy4GHvLeRuOw_hTGDqUzyXglS4WkPCHkuQ9tluJ-Zljv2PXGaNZQi2FWXT22xvvGI3n3ABu1vCA8XKDfV9WDvlNd_8k7yy12ODsyP0sUnXNHxA6tWCTkpvSGPsAxOw3FC6I1sw6tHUq2cqlMAeDSPvvASER8vCNBiB30mtnev4yUW1mpUO2BUJbPiq6fNTQ5U29k--x395ZCgpaesJTLtQUcCD12n1MEuglEDtuFxarPhz0EG1F6qh35T4IrPqW7WdKIitbRCizUtiryxbOuDqSi6YJeTxB_7A0QOJdLkIRT9HwIlfrxOZj2Hzb9_w0qVSDGiqo-stF8ZjgfTAJzGJEod_CQmfJPomGOuTiX2eH53lnhggA5RRnzWsLO299m-08Dk3IKvUKVKQccpCR8qj9Uov-KW8l02IQ9NkKuywoQt9_qeftff4kJgBbRDu2_cVN2DDl2aVXUpLaUYSvKSwi3_fiyANXaA84LIXkJpwB-7kNuyg7JG2RP4R0Uh2tIQ7JGtdQEeglVFlxS8pEATxyon5hXgX9ep_ivBPutxRu9577o7hvOxdH8XCdkuZQ-CPHFQKCcvcxGqBDmJ02aUDih-5R1anVVViv9PjFSVYOUs8shhBg7_oG7_LJqJR7bsvC5l19c3irj2qjAd8csAieW7zAj7rzlyzDTdQ",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res1) => console.log(res1));

    // //

    // const respJSON = await fetch("https://api-int.kennect.com/v2/packages", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS51cy5zdGVybGluZ2NoZWNrLmFwcC92MiIsInN1YiI6IkFwaVVzZXJPbmdzdGVyIiwidXNlcklkIjoiQXBpVXNlck9uZ3N0ZXIiLCJjbGllbnROYW1lIjoiT25nc3RlciBDYXJlIiwiY3VzdG9tZXJJZCI6IjEzNzA1IiwidHJhZGluZ1BhcnRuZXJOYW1lIjoiT25EZW1hbmRUUCIsInRyYWRpbmdQYXJ0bmVyR3JvdXAiOiJPbkRlbWFuZCIsImludGVncmF0aW9uSWQiOjQ3MzYsInBsYXRmb3JtSWQiOiJzZCIsImdhdGV3YXlFbmFibGVkIjpmYWxzZSwiaWF0IjoxNjEyOTY3ODI5LCJleHAiOjE2MTMwMDM4Mjl9.tgZw6b9ZH1Uecxd2jxZlRIO_s8FIV_eEep2UqT-NqWJvqL9RgW_8ByGfEXWLLK5jTWT3yjGvt4UXTcIJQoTXV3NIJgEoVP9T1uVAjvjejdYvRtrNGmm56PuCcB50hbfkAAp4H7WUxNYHkYKPuRl8HxS2aHVvnOyUTAbSODuRXk7ENU_-FK_vIGnA_17JXxNPhaHYwnoIzQKIcd2DY-Su4tUZOkHQxhM4_Jliq_vZe6psCPS-hJp7xKf7759UhG18CJAMtuI_ynfEc-EHKFQB32VJagvQmq0dmkbixidJgUdtgPpbcAO96b5YiQsMKz77ejV86QevKftBQH8-s1GAKVM1pa6_TuaDPySQkeFZlDiiA5Z34xyIa-Ly9A2zWEggnkpja3A9k9-2phgIWttAjqzJBZ4C3Lz1MKGQSt900N34DaEg_Dw_0QCGsgldy945thtgAyA_IwjV2kzaqhUjKyaA9JxWxH9D4f-eCbrUWVz9ngpOxwuHOpZ_7AmVOHJIGEyPkdgN2Ya3rMxsdLQsAYMZm1rsXKyfFmTUgTxCejWLPW1UQbuedAlPnAXrGzK-svieuOtnLYEkRKwnxb1A29QvY1_bXt62T040Jqb7bgQvCxO8hPNgS_Vx16py4KZdJlWTLixBiqvBZUGfF5eVboKvjvPyFgQpeWvAJA6Oo2M`,
    //     "Access-Control-Allow-Origin": "https://api-int.kennect.com",
    //   },
    // });

    // const resp = await respJSON.json();
    // console.log(resp, "AAAAAA");
  };

  // const scrrening = () => {
  //   alert("upload images");
  //   // window.location.href = "/"
  // };

  const test = () => {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();

    if (!!file) {
      setImage(file);
      reader.onload = function (e) {
        var image = document.getElementById("photo_id1");
        image.src = e.target.result;
      };
      setPreviewProfile(true);
      reader.readAsDataURL(file);
    }
  };

  const test1 = () => {
    var file = document.getElementById("file1").files[0];
    var reader = new FileReader();

    if (!!file) {
      setImag1(file);
      reader.onload = function (e) {
        var image = document.getElementById("photo_id11");
        image.src = e.target.result;
      };
      setPreviewProfie(true);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form className="p-3">
      <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "22vh" } : { marginBottom: "0vh" }}>
        <Col xs={12}>
          <p className="text-muted">
            For validity and Security Purpose we Would need the front and Back Picture of your Photo ID.This information will be save for us. and will not be displayed with your
            Profile
          </p>
          <p className="text-muted"></p>
          <hr />
        </Col>
        <Col xs={12} md={6}>
          <Grid>
            <p className="text-muted">Front Side</p>
            <Paper className={classes.paper}>
              <input id="file" type="file" accept="image/x-png,image/gif,image/jpeg" style={{ display: "none" }} onChange={test} />

              {previewProfile ? (
                <div
                  style={{
                    paddingTop: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="" id="photo_id1" width="200" height="120" style={{ border: "2px solid lightblue", borderRadius: 10 }} />
                </div>
              ) : (
                // <img
                //   src={
                //     process.env.PUBLIC_URL + "/assets/icons/upload.png"
                //   }
                //   alt=""
                // />
                <p className={classes.title} style={{ paddingTop: 100 }}>
                  <img src={camera} />
                  <br />
                  Drag and Drop
                  <br />
                </p>
              )}
              {/* <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  background: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  // style={{ paddingTop: 200 }
                  className={classes.title}
                  onClick={triggerImageUpload}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  +
                </p>
              </div> */}

              <div
                style={{
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    background: "skyblue",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 20,
                    color: "white",
                  }}
                  onClick={triggerImageUpload}
                >
                  {" "}
                  +{" "}
                </h1>
              </div>
            </Paper>
          </Grid>
        </Col>

        <Col xs={12} md={6}>
          <Grid>
            <p className="text-muted">Front Side</p>
            <Paper className={classes.paper}>
              <input id="file1" type="file" accept="image/x-png,image/gif,image/jpeg" style={{ display: "none" }} onChange={test1} />

              {previewProfie ? (
                <div
                  style={{
                    paddingTop: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img alt="" id="photo_id11" width="200" height="120" style={{ border: "2px solid lightblue", borderRadius: 10 }} />
                </div>
              ) : (
                // <img
                //   src={
                //     process.env.PUBLIC_URL + "/assets/icons/upload.png"
                //   }
                //   alt=""
                // />
                <p className={classes.title} style={{ paddingTop: 100 }}>
                  <img src={camera} />
                  <br />
                  Drag and Drop
                  <br />
                </p>
              )}
              {/* <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  background: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  // style={{ paddingTop: 200 }
                  className={classes.title}
                  onClick={triggerImageUpload}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  +
                </p>
              </div> */}

              <div
                style={{
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    background: "skyblue",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 20,
                    color: "white",
                  }}
                  onClick={triggerImageUpload1}
                >
                  {" "}
                  +{" "}
                </h1>
              </div>
            </Paper>
          </Grid>
        </Col>
      </Row>

      <Form.Group className="w-100 d-flex ">
        <Button variant="flat" type="button" className="p-2 w-25 ml-auto">
          &lt; Back
        </Button>
        <Button variant="flat" className="btn-flat2 w-25 p-2 ml-3" onClick={scrrening}>
          Submit
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
