import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import moment from "moment";
export const Started = ({ step, setStep, stage, setStage }) => {
  const [formData, setFormData] = useState({
    additionalInformation: "",
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
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
    <div className="w-60 ml-auto main-content">
      <div className="d-flex justify-content-between align-items-center px-3 pt-3 head-div">
        <div className="d-flex align-items-center">
          <h2>STARTED</h2> 

          <span className="blue-text"> &nbsp; &#183; &nbsp; </span>
          <p className="blue-text h5">{step === 2 ? "LOCATION" : step === 3 ? "MOBILE NUMBER" : step === 4 ? "PREFERRED JOB TYPE" : "AVAILABLE TIMING"}</p>
        </div>
        {/* <h4 className="text-nowrap">1 / 5</h4> */}
      </div>

      {step === 2 ? (
        <Step2 step={step} setStep={setStep} formData={formData} setFormData={setFormData} />
      ) : step === 3 ? (
        <Step3 step={step} setStep={setStep} formData={formData} setFormData={setFormData} />
      ) : step === 4 ? (
        <Step4 step={step} setStep={setStep} formData={formData} setFormData={setFormData} />
      ) : (
        <Step5 step={step} setStep={setStep} setStage={setStage} formData={formData} setFormData={setFormData} />
      )}

      {/* <Step5
        step={step}
        setStep={setStep}
        setStage={setStage}
        formData={formData}
        setFormData={setFormData}
      /> */}
    </div>
  );
};
