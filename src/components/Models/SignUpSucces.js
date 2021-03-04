import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

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
  btn: {
    width: "100%",
    border: "none",
    outline: "nene",
    background: "#28ace2",
    color: "white",
    padding: "5px 0px",
    marginTop: "2em",
  },
}));

const SignUpSucces = ({ open, setOpen }) => {
  console.log(open);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
          <Grid container item xs={11} sm={5} md={4} justify="center" className={classes.paper}>
            <div>
              <h4>Thanks For Signup With Ongstercare! </h4>
              <p>Check your email to complete signup process</p>
              <a href="https://mail.google.com/" target="blank">
                <button className={classes.btn} onClick={handleClose}>
                  Chack Gmail
                </button>
              </a>
            </div>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
};

export default SignUpSucces;
