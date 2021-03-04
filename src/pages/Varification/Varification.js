import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import classes from "./Varification.module.css";
// import logo from "../../../public/assets/logo.png"

import TraModal from "../../components/Models/popup";

const Varification = () => {
  const [open, setOpen] = React.useState(false);
  const [careSeeker, setCareSeeker] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Grid container justify="center" alignContent="center" direction="column" className={classes.main}>
        <span className={classes.logo}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/logo.png"} alt="" width="170" />
          OngsterCare
        </span>
        <span className={classes.text}>Your Email Address Has Been Verified!</span>
        <br />
        <button className={classes.btn} onClick={() => handleOpen()}>
          Login Now
        </button>
      </Grid>
      <TraModal open={open} setOpen={setOpen} setCareSeeker={setCareSeeker} />
    </div>
  );
};

export default Varification;
