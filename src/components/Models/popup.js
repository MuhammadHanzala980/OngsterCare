import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/dataAction";
import { Started } from "../../pages/AllInfo/Started";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "2px" : 0,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
}));

export default function TraModal({ open, setOpen, setCareSeeker }) {
  const classes = useStyles();
  const history = useHistory();
  // const dataState = useSelector(state => state.getDataReducer.login);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    setOpen(false);
    setCareSeeker(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const respJSON = await fetch(`https://api.ongstercare.com/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const resp = await respJSON.json();
      console.log(resp);

      localStorage.setItem("user", JSON.stringify(resp.user));
      if (resp.success == true) {
        history.replace("/all-info");
        console.log('+++++++++++++++++++++++++')
        // const user = {
        //     id: resp.user.id,
        //     role: resp.user.name
        // }
        dispatch(login(resp.user));
        setFormData({
          email: "",
          password: "",
        });
        setError("");
        // history.replace("/best-match");
      } else {
        setError(resp.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              <i>Welcome Back!</i>
            </h2>
            <img src={process.env.PUBLIC_URL + "/assets/icons/Group 261.png"} alt="" />
            <div className="p-2" style={{ color: "#b5b5b5" }}>
              <p className="OR">
                <span>OR</span>
              </p>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  className="p-4"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  className="p-4"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {!!error && <Form.Text className="text-danger">{error}</Form.Text>}
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center">
                <a>
                  {" "}
                  <u>Forget password?</u>
                </a>
                <Button variant="flat" type="submit" className=" py-2 px-5">
                  Login
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <Link to="/join-us" onClick={handleClose}>
                <p style={{ color: "#28ace2" }}>Join Now &nbsp; &gt;</p>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
      <style type="text/css">
        {`
                .OR{
                    width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #b5b5b5; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
                }
                .OR span { 
                    background:#fff; 
                    padding:0 10px; 
                }
                .btn-flat {
                    background-color: #28ace2;
                    color: white;
                         }
                    .btn-flat:hover {
                    background-color: #28ace280;
                    color: white;
                         }
                `}
      </style>
    </>
  );
}
