import "./App.css";
import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { StepThree } from "./steps/StepTree";
import { StepFour } from "./steps/StepFour";
import { ProgressBar } from "./components/ProgressBar";
import dishesData from "./data/dishes.json";
import { CartItemData } from "./types";

type FormData = {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  cart: CartItemData[];
};

const INITIAL_DATA = {
  meal: "",
  numberOfPeople: 1,
  restaurant: "",
  cart: [{ dish: "", count: 0 }],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  // const [error, setError] = useState<string>("");
  // const isInvalid = ():boolean => {

  //   if(isStepThree && data.cart.length === 0){
  //     setError("Add item into cart")
  //     return true;
  //   }
  //   return false
  // }

  // const totalDishes = (): number => {
  //   return 0
  // }

  const totalDishesresult = data.cart.reduce((accumulator, obj) => {
    return accumulator + obj.count;
  }, 0);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isStepThree,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo
      {...data}
      updateFields={updateFields}
      dishesData={dishesData["dishes"]}
    />,
    <StepThree
      {...data}
      updateFields={updateFields}
      dishesData={dishesData["dishes"]}
    />,
    <StepFour {...data} />,
  ]);

  const isInvalid = isStepThree && data.cart.length === 0;
  const isNotEnough = isStepThree && data.numberOfPeople > totalDishesresult;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // if(isInvalid)
    if (!isLastStep) return next();
    console.log(data);
    alert("Successfule Order complimention");
  }

  return (
    <div className="w-full p-5  bg-white border border-gray-200 rounded-lg shadow-md  md:p-20 dark:bg-gray-800 dark:border-gray-700">
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
        <ProgressBar currentStep={currentStepIndex} />
        {step}
        {isInvalid && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium"
            role="alert"
          >
            Add a Item into cart
          </div>
        )}
        {isNotEnough && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium"
            role="alert"
          >
            The total number of dishes should be greater or equal to the number
            of people
          </div>
        )}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back} className="previous-button">
              Previous
            </button>
          )}
          <button type="submit" disabled={isInvalid} className="next-button">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
