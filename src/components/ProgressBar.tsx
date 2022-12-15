import React, { useState } from "react";
import "./progressBar.css";
import { TiTick } from "react-icons/ti";





export function ProgressBar({currentStep}:any){
  const steps = ["Step 1", "Step 2", "Step 3", "Review"];
//   const [currentStep, setCurrentStep] = useState(1);
//   const [complete, setComplete] = useState(false);
  console.log(currentStep);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
        //   <div
        //     key={i}
        //     className={`step-item ${currentStepIndex +1 === i + 1 && "active"} ${
        //       (i + 1 < currentStep || complete) && "complete"
        //     } `}
        //   >
            <div key={i} className={`step-item ${currentStep +1 === i + 1 && "active"} ${(i + 1 < currentStep + 1 ) && "complete"} `} >
            {/* <div className="step">
              {i + 1 < currentStepIndex +1 || complete ? <TiTick size={24} /> : i + 1}
            </div> */}
                <div className="step">{i + 1 < currentStep +1  ? <TiTick size={24} /> : i + 1}</div>
                <p className="text-gray-500">{step}</p>
            </div>
        ))}
      </div>
    </>
  );
};
