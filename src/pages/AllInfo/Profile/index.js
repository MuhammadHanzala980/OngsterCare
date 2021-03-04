import React from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Step6 } from "./step6";
import { Step7 } from "./step7";
import { Step8 } from "./step8";

export const Profile = ({ step, setStep, setStage }) => {
  const [formData, setFormData] = React.useState({
    hourlyRate: {
      min: "20$",
      max: "37$",
    },
    optionChild: "1",
    categoryId: ["null"],
    helpOption: ["null"],
    language: 1,
    highestLevelAchieved: "",
    schoolName: "",
    graduationYear: "",
    currentlyAttending: 1,
    skillName: ["null"],
    experience: "",
    remoteLearningHelp: 1,
    havecar: 1,
    nonSmoker: 1,
    confortableWithPets: 1,
    acceptOnlinePayment: 1,
    acceptProfessionalPayment: 1,
    profileTitle: "",
    profileLater: "",
  });

  return (
    <div className="w-60 ml-auto main-content">
      <div className="d-flex justify-content-between align-items-center px-3 pt-3 head-div">
        <div className="d-flex align-items-center">
          <h2>PROFILE</h2>

          <span className="blue-text"> &nbsp; &#183; &nbsp; </span>
          <p className="blue-text h5">
            {step === 1
              ? "PREFERRED HOUR TIMING"
              : step === 2
              ? "LANGUAGE SPOKEN"
              : step === 3
              ? "Education"
              : step === 4
              ? "SKILL/TRAINING"
              : step === 5
              ? "ADDITIONAL INFORMATION"
              : step === 6
              ? "BIO"
              : step === 7
              ? "APPLY JOB"
              : "UPLOAD PROFILE IMAGE"}
          </p>
        </div>
        <h4 className="text-nowrap">2 / 5</h4>
      </div>
      {step === 1 ? (
        <Step1
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 2 ? (
        <Step2
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 3 ? (
        <Step3
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 4 ? (
        <Step4
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 5 ? (
        <Step5
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 6 ? (
        <Step6
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      ) : step === 7 ? (
        <Step7 step={step} setStep={setStep} />
      ) : (
        <Step8
          step={step}
          setStep={setStep}
          setStage={setStage}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};
