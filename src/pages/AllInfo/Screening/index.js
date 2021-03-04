import React from "react";
import { Step1 } from "./step1";
import { Step2 } from "../Membership/step2";

export const Screening = ({ step, setStep, setStage }) => {
  return (
    <div className="w-60 ml-auto main-content">
      <div className="d-flex justify-content-between align-items-center px-3 pt-3 head-div">
        <div className="d-flex align-items-center">
          <h2 className="text-uppercase">Screening</h2>

          <span className="blue-text"> &nbsp; &#183; &nbsp; </span>
          <p className="blue-text h5 text-uppercase">{step === 1 && "get screening"}</p>
        </div>
        <h4 className="text-nowrap">4 / 5</h4>
      </div>
      {step === 1 && <Step1 step={step} setStep={setStep} setStage={setStage} />}
      {step === 2 && <Step2 step={step} setStep={setStep} setStage={setStage} />}
    </div>
  );
};
