import { useMultistepForm } from "./useMultistepForm";
import "./App.css";
import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { StepThree } from "./steps/StepTree";
import { StepFour } from "./steps/StepFour";
import { FormEvent, useState } from "react";


type FormData = {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  dish: string;
  numberOfServings: number;
  cart: CartItemData[];
};

type CartItemData = {
  dish: string;
  count: number
}

const INITIAL_DATA = {
  meal: "",
  numberOfPeople: 1,
  restaurant: "",
  dish: "",
  numberOfServings: 1,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  // function updateCart(item: CartItemData){
  //   setData(prev => {
  //     return {...prev, }
  //   })
  // }




  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<StepOne {...data} updateFields={updateFields}  />, <StepTwo {...data} updateFields={updateFields} />, <StepThree {...data} updateFields={updateFields} />, <StepFour {...data}  />]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if(!isLastStep) return next();
    // console.log(updateFields);
    alert("Successfule Order complimention")
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
