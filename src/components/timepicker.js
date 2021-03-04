import "date-fns";
import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  TimePicker,
} from "@material-ui/pickers";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Schedule } from "@material-ui/icons";

export default function TimePickers({
  setTime,
  time,
  timeSlots,
  setTimeSlots,
  currentIndex,
  isTo,
}) { 
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  useEffect(() => {
    let hour = selectedDate.getHours();
    let minute = selectedDate.getMinutes();
    // setTime(`${hour}-${minute}`)
    let old = [...timeSlots];
    old[currentIndex].value[isTo ? "to" : "from"] = `${hour}-${minute}`;
    setTimeSlots(old);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <KeyboardTimePicker
                ampm={false}
                margin="normal"
                id="time-picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                className="my-time-picker"
                style={{ width: "50%" }}
                InputProps={{ readOnly: true }}
                autoOk={true}
                keyboardIcon={<Schedule />}
            /> */}

      <TimePicker
        ampm={false}
        margin="normal"
        id="time-picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change time",
        }}
        className="my-time-picker"
        style={{ width: "50%" }}
        InputProps={{ readOnly: true }}
        autoOk={true}
        keyboardIcon={<Schedule />}
      />

      <style type="text/css">
        {`
               .my-time-picker.MuiFormControl-root.MuiTextField-root.MuiFormControl-marginNormal{
                border: 1px solid silver;
                padding: .5rem 1rem;
            }
            `}
      </style>
    </MuiPickersUtilsProvider>
  );
}
