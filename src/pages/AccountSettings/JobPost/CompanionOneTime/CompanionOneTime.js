import React, { Component } from "react";
import classes from "./CompanionOneTime.module.css";
import { Grid } from "@material-ui/core";
import { Header } from "../../../../components/header2.js";
import bg from "../Images/bg.svg";
export default class CompanionOneTime extends Component {
  render() {
    return (
      <>
        <Header />

        <Grid container justify="center" className={classes.main}>
          <Grid item container justify="center" xs={12} sm={11} md={8}>
            <Grid item container justify="center" xs={12} md={10} className={classes.inputGroup}>
              <Grid item xs={12} md={2}>
                <label className={classes.label} for="cars">
                  Near
                </label>
                <br />
                <input type="text" placeholder="55447" className={classes.input} />
              </Grid>

              <Grid item xs={12} md={6}>
                <label className={classes.label} for="cars">
                  Category
                </label>
                <br />
                <select name="cars" id="cars" className={classes.input}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Grid>

              <Grid item xs={12} md={2}>
                <label className={classes.label} for="cars">
                  Within
                </label>
                <br />
                <select name="cars" id="cars" className={classes.input}>
                  <option value="volvo">5 Miles</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} lg={12}>
            <div className={classes.bg}>
              <h1 className={classes.header}>
                Companion(non-medical)
                <br />
                How often do you need help?
              </h1>
            </div>
            <div className={classes.group}>
              <span> Back </span>
              <div className={classes.card}>
                <div className={classes.cardSec}>
                  <div className={classes.btnGrp}>
                    <div className={classes.border}>
                      <button className={classes.btn}>Recurring</button>
                      <button className={classes.btn}>One-time</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}
