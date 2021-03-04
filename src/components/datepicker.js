import React, { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from "@material-ui/pickers";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { $ } from "jquery";
import moment from "moment";

export default function MaterialUIPickers({
  width,
  setDate,
  disabled,
  maxDate,
  minDate,
  md,
}) {
  // The first commit of Material-UI

  const [selectedDate, setSelectedDate] = useState();
  // const [selectedDate, setSelectedDate] = React.useState(new Date(moment().subtract(18, "years").calendar()));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (!!date) {
      let dd = String(date.getDate()).padStart(2, "0");
      let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = date.getFullYear();
      setDate(`${mm}-${dd}-${yyyy}`);
    }
  };
  // const inputHandleDateChange = (date) => {
  //     setSelectedDate(date);
  //     if (!!date) {
  //         let dd = String(date.getDate()).padStart(2, '0');
  //         let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  //         let yyyy = date.getFullYear();
  //         setDate(`${mm}-${dd}-${yyyy}`)
  //     }
  // };
  //jquery use for icon and calender
  // function setDatepicker(_this) {

  //     /* Get the parent class name so we
  //         can show date picker */
  //     let className = $(_this).parent()
  //         .parent().parent().attr('class');

  //     // Remove space and add '.'
  //     let removeSpace = className.replace(' ', '.');

  //     // jQuery class selector
  //     $("." + removeSpace).datepicker({
  //         format: "dd/mm/yyyy",

  //         // Positioning where the calendar is placed
  //         orientation: "bottom auto",
  //         // Calendar closes when cursor is
  //         // clicked outside the calendar
  //         autoclose: true,
  //         showOnFocus: "false"
  //     });
  // }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <KeyboardDatePicker
                className="my-date-picker"
                disabled={disabled}
                variant="inline"
                allowInputToggle= {true}
                format="MM-dd-yyyy"
                style={width ? { width: "100%" } : {}}
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                InputProps={{ readOnly: true }}
                autoOk={true}
                /> */}
      {/* <CalendarTodayIcon className="calenderIcon"/> */}
      <DatePicker
        disabled={disabled}
        variant="inline"
        inputVariant="outlined"
        allowInputToggle={true}
        format="MM-dd-yyyy"
        style={width ? { width: width } : { width: "100%" }}
        id="date-picker-inline"
        value={selectedDate}
        maxDateMessage=''
        minDate={minDate}
        maxDate={md ? moment().subtract(18, "years").calendar() : moment().add(300, "years").calendar()}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        initialFocusedDate={md ?moment().subtract(18, "years").calendar(): '' }
        InputProps={{ readOnly: true }}
        autoOk={true}
      />

      {/* <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                style={width ? { width: "100%" } : {}}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            /> */}

      {/* Container class contains the date field */}
      {/* <div className="container my-date-picker" style={width ? { width: "100%" } : {}}> 
        <div className="form-group m-1"> 
          <label className="font-weight-bold" htmlFor="dob"> 
            Date of Birth: 
          </label> 
          <div className="input-group date"> 
    
            <span className="input-group-prepend"> 
              <span className="input-group-text"> 
                <i className="fa fa-calendar" onClick={setDatepicker(this)}> 
                </i> 
              </span> 
            </span> 
            <input className="form-control" type="text" name="dob" id="dob" defaultValue /> 
          </div> 
        </div> 
      </div> */}

      <style type="text/css">
        {`
                .my-date-picker .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-adornedEnd{border: 1px solid #cfcfcf;
                padding: .5rem;
            }
                .MuiInput-underline:before{
                    content:none
                }
                button:focus{
                    outline:none
                }
                .calenderIcon{
                    position: relative;
                    top: -30px;
                    left: 150px;
                    color: red;
                }
                `}
      </style>
    </MuiPickersUtilsProvider>
  );
}
