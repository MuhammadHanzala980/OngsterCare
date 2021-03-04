import React, { useState } from "react";
import { Step1 } from "../AllInfo/Started/step1";
import "./Styles.css";
import { Styles } from "./Style";
// import { Step2 } from "./step2";
// import { Step3 } from "./step3";
// import { Step4 } from "./step4";
// import { Step5 } from "./step5";
import moment from "moment";
export const SignUp = () => {
  const [formData, setFormData] = useState({
    additionalInformation: "",
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: null,
    dob: null,
    howDidYouFindUS: "",
    streetAddress: "",
    zipCode: "",
    rangeInMiles: "",
    phone: "",
    // "hoursPerWeek": {
    //     "min": "",
    //     "max": ""
    // },
    jobType: "",
    hoursPerJob: {
      min: "",
      max: "",
    },
    availableToWork: [
      {
        monday: [
          {
            from: "",
            to: "",
          },  
        ],
      },
    ],
    startDate: "",
    endDate: "",
  });

  return (
    <div className="page-slider d-none d-md-block d-lg-block ">
      <div className="w-60 ml-auto main-content">
        <div className="d-flex justify-content-between align-items-center px-3 pt-3 head-div">
          <div className="d-flex align-items-center">
            <h2>SignUp</h2>

            <span className="blue-text"> &nbsp; &#183; &nbsp; </span>
            <p className="blue-text h5">ACCOUNT INFO</p>
          </div>
          {/* <h4 className="text-nowrap">1 / 5</h4> */}
        </div>

        <Step1 formData={formData} setFormData={setFormData} />
        {/* <Styles /> */}

        {/* <Step5
        step={step}
        setStep={setStep}
        setStage={setStage}
        formData={formData}
        setFormData={setFormData}
    /> */}
      </div>
      <Styles step={2} stage={1} />
    </div>
  );
};
