import { useMultistepForm } from "./useMultistepForm";
import "./App.css";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepTree";
import { StepFour } from "./StepFour";
import { FormEvent, useState } from "react";

type FormData = {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  dish: string;
  numberOfServings: number;
};

const INITIAL_DATA = {
  meal: "",
  numberOfPeople: 0,
  restaurant: "",
  dish: "",
  numberOfServings: 0,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }


  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<StepOne {...data} updateField={updateFields}  />, <StepTwo {...data} updateField={updateFields} />, <StepThree {...data} updateField={updateFields} />, <StepFour {...data} updateField={updateFields} />]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
    console.log("Next");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      {/* <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1> */}
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Previous
            </button>
          )}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
