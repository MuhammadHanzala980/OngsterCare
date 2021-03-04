import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "30vw",
    margin: "auto",
  },
  color: {
    color: "black",
    padding: "2rem 0",
    margin: "1rem",
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function LargeRangeSlider({ title, value, setValue }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        className="text-muted text-center"
        gutterBottom
      >
        {title}
      </Typography>
      <Slider
        className={classes.color}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        color="dark"
        valueLabelDisplay="on"
      />
    </div>
  );
}
