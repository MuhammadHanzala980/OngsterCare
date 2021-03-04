import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Inputs = () => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        id="standard-read-only-input"
        label="Near"
        defaultValue="12379"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
};

export default Inputs;
