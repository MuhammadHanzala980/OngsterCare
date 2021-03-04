import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#28ace2"
        },

    },
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "-webkit-fill-available",

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export default function StandardSelect({ label, dropOptions, noMargin, onChange, value }) {
    const classes = useStyles(noMargin);

    return (
        <ThemeProvider theme={theme}>

            <FormControl className={classes.formControl} style={noMargin ? { margin: 0 } : {}}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {label}
                </InputLabel>
                <Select
                    disableUnderline
                    InputProps={{ classes }}
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={value}
                    onChange={onChange}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem> */}
                    {dropOptions.map((val, i) => {
                        return (
                            <MenuItem key={i} value={val}>{val}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

        </ThemeProvider>
    );
}