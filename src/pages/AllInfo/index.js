// import React, { useState } from "react";
// import { Started } from "./Started";
// import { Profile } from "./Profile";
// import { Membership } from "./Membership";
// import { Screening } from "./Screening";
// import { Styles } from "./style";

// export const AllInfo = () => {
//   const [step, setStep] = useState(1);
//   const [stage, setStage] = useState(1);
//   return (

//     <div className="page-slider  ">
//       {/* d-none d-md-none d-lg-block */}
//       {
//                 stage === 1 ?
//                     <Started step={step} setStep={setStep} stage={stage} setStage={setStage} /> :
//                     stage === 2 ?
//                         <Profile step={step} setStep={setStep} stage={stage} setStage={setStage} /> :
//                         stage === 3 ?
//                             <Membership step={step} setStep={setStep} stage={stage} setStage={setStage} /> :
//                             <Screening step={step} setStep={setStep} stage={stage} setStage={setStage} />
//             }

//       {/* <Membership
//         step={step}
//         setStep={setStep}
//         stage={stage}
//         setStage={setStage}
//       /> */}
//       <Styles step={step} stage={stage} />
//     </div>
//   );
// };

import React, { useState } from "react";
import { Started } from "./Started";
import { Profile } from "./Profile";
import { Membership } from "./Membership";
import { Screening } from "./Screening";
import { Styles } from "./style"; 

export const AllInfo = () => {
  const [step, setStep] = useState(2);
  const [stage, setStage] = useState(1);
  return (
    <div>
      <div className="page-slider d-none d-md-block d-lg-block ">
        {/* d-none d-md-none d-lg-block */}
        {stage === 1 ? (
          <Started step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : stage === 2 ? (
          <Profile step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : stage === 3 ? (
          <Membership step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : (
          // <Screening
          //   step={step}
          //   setStep={setStep}
          //   stage={stage}
          //   setStage={setStage}
          // />
          <Membership step={step} setStep={setStep} stage={stage} setStage={setStage} />
        )}

        {/* <Membership
        step={step}
        setStep={setStep}
        stage={stage}
        setStage={setStage}
      /> */}
        <Styles step={step} stage={stage} />
      </div>
      <div className="page-slider1 d-block d-md-none d-lg-none ">
        {/* d-none d-md-none d-lg-block */}
        {stage === 1 ? (
          <Started step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : stage === 2 ? (
          <Profile step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : stage === 3 ? (
          <Membership step={step} setStep={setStep} stage={stage} setStage={setStage} />
        ) : (
          <Screening step={step} setStep={setStep} stage={stage} setStage={setStage} />
        )}

        {/* <Membership
        step={step}
        setStep={setStep}
        stage={stage}
        setStage={setStage}
      /> */}
        <Styles step={step} stage={stage} />
      </div>
    </div>
  );
};
