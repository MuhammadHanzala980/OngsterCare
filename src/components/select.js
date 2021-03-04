import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#28ace2",
    },
  },

  overrides: {
    MuiMenuItem: {
      root: {
        "&$selected": {
          backgroundColor: "pink",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    borderColor: "#28ace2",
  },
  select: {
    color: "blue",
  },
}));

export default function SimpleSelect({
  size,
  label,
  padding,
  value,
  setValue,
  options,
  required,
  isMulti,
  disabled,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const closeMenu = () => {
    // console.log('working')
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          required={required}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          placeholder={label}
          color="primary"
          onChange={handleChange}
          label={label}
          multiple={isMulti}
          // open={true}
        >
          {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem> */}
          {options &&
            !!options.length &&
            options.map((val, i) => {
              return (
                <MenuItem
                  disabled={disabled}
                  value={val.value}
                  key={i}
                  selected={true}
                  className={classes.select}
                >
                  {val.detail}
                </MenuItem>
              );
            })}

          {
            //     <Button className="closemenu" onClick={closeMenu()} variant="outlined" color="grey">
            //      Done
            //    </Button>
          }
          {/* <style type="text/css">
                    {`.dropdown.clicked:hover .dropdown-content {
                        display: none;
                    }`}
                    </style> */}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
