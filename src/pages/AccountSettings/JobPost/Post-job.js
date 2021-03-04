import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Header } from "../../../components/header2.js";
import { Footer } from "../../../components/footer.js";
import classes from "./postJob.module.css";
import ancle from "./Images/ancle.svg";
import child from "./Images/child.svg";
import pet from "./Images/pet.svg";
import home from "./Images/home.svg";
export default class PostJob extends Component {
  render() {
    return (
      <div>
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

            <Grid item container justify="center">
              <div className={classes.center}>
                <h1 className={classes.heading}>POST A JOB</h1>
                <span className={classes.text}>
                  Post a job to our care givers community and see who's interested. <br /> Select and hire the right fit for the job
                </span>
              </div>
            </Grid>

            <Grid item container justify="space-evenly" sm={12} md={12} lg={12} className={classes.cardContainer}>
              <Grid item xs={12} sm={5} md={5} className={classes.optCards}>
                <div className={classes.content}>
                  <img src={ancle} alt="ancle" />
                  <div>Senior care</div>
                </div>
                <div className={classes.tegBox}>
                  <span className={classes.teg}>Companion Care</span>
                  <span className={classes.teg}>Hands-on Care</span>
                  <span className={classes.teg}>Live-in Care</span>
                  {/* <span className={classes.teg} ></span> */}
                </div>
              </Grid>

              <Grid item xs={12} sm={5} md={5} className={classes.optCards}>
                <div className={classes.content}>
                  <img src={child} alt="child" />
                  <div>Child care</div>
                </div>
                <div className={classes.tegBox}>
                  <span className={classes.teg}>Babysitter or Nany</span>
                  <span className={classes.teg}>Daycare Center</span>
                  <span className={classes.teg}>Tutoring or lesson</span>
                  <span className={classes.teg}>Special Needs</span>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} md={5} className={classes.optCards}>
                <div className={classes.content}>
                  <img src={pet} alt="pet" />
                  <div>Pet care</div>
                </div>
                <div className={classes.tegBox}>
                  <span className={classes.teg}>Pet Sitter</span>
                  <span className={classes.teg}>Walker</span>
                  <span className={classes.teg}>Trainer</span>
                  <span className={classes.teg}>Groomer</span>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} md={5} className={classes.optCards}>
                <div className={classes.content}>
                  <img src={home} alt="home" />
                  <div>Pet care</div>
                </div>
                <div className={classes.tegBox}>
                  <span className={classes.teg}>House keeper</span>
                  <span className={classes.teg}>House cleaning</span>
                  <span className={classes.teg}>Personal Assistant</span>
                  <span className={classes.teg}>Errands/ Odd Jobs</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
