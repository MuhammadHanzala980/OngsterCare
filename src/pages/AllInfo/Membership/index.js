import React from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";

export const Membership = ({ step, setStep, setStage }) => {
   
  return (
    <div className="w-60 ml-auto main-content">
      <div className="d-flex justify-content-between align-items-center px-3 pt-3 head-div">
        <div className="d-flex align-items-center">
          {step == 3 ? <h2>Profile</h2> : <h2>MEMBERSHIP</h2>}
          <span className="blue-text"> &nbsp; &#183; &nbsp; </span>
          <p className="blue-text h5 text-uppercase">
            {step === 1 ? "Ongstercare premium":step === 3 ? " . Photo ID":  "CHECKOUT"}
          </p>
        </div>
     {step == 3 ?<h4 className="text-nowrap">5 / 5</h4> :   <h4 className="text-nowrap">3 / 5</h4>}
      </div>
      {step === 1 ? (
        <Step1 step={step} setStep={setStep} />
      ) : step === 3 ? (
        <Step3 step={step} setStep={setStep} />
      ) : (
        <Step2 step={step} setStep={setStep} setStage={setStage} />
      )}
    </div>
  );
};
 