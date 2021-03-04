import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export const Footer = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <hr />
        <Row className="justify-content-center">
          <Col
            xs={4}
            md={2}
            className="padding-resp"
            style={{ paddingTop: ".3rem" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/play.png"}
              className="w-100 cursor-pointer"
              alt=""
            />
          </Col>
          <Col xs={4} md={2} className="padding-resp">
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/apple.png"}
              className="w-100 cursor-pointer"
              alt=""
            />
          </Col>
          <Col xs={12} md={8} className="social-row">
            <div className="social-row">
              <p>Connect with us</p>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/facebook.png"}
                className="mx-2 cursor-pointer"
                alt=""
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/twitter.png"}
                className="mx-2 cursor-pointer"
                alt=""
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/instagram.png"}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </Col>
        </Row>
        <hr />

        <Row className="mb-3">
          <Col xs={6} md={3}>
            <p className="h5">About Us</p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/career");
              }}
            >
              Career
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/termOfUses");
              }}
            >
              Terms of use
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/privacy");
              }}
            >
              Privacy Policy
            </p>
            {/* <p className="cursor-pointer" onClick={()=>{history.push('/cA_Privacy')}}  >F.A Privacy Policy</p> */}
          </Col>
          <Col xs={6} md={3}>
            <p className="h5">Get Help</p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/saftey");
              }}
            >
              Safety Centre
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/help");
              }}
            >
              Help and FAQS
            </p>
          </Col>
          <Col xs={12} md={6} className="footerImg">
            <p className="h5">Discover</p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/homePay");
              }}
            >
              Home pay
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/businees");
              }}
            >
              List your Bussiness
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/Benefits");
              }}
            >
              Benefits program
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/affilates");
              }}
            >
              Become Affilate
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                history.push("/careDictnoary");
              }}
            >
              Ongster care Dictionary
            </p>
          </Col>
        </Row>
      </Container>

      <style type="text/css">
        {`
                .footerImg{
                    background-image: url('${
                      process.env.PUBLIC_URL + "/assets/icons/map.png"
                    }');
                    background-size: 50% auto;
                    background-repeat: no-repeat;
                    background-position: right top;
                    background-color: white;
                }
                
                `}
      </style>
    </>
  );
};
