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
            <button type="button" onClick={back} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Previous
            </button>
          )}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
