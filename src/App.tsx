import { useMultistepForm } from "./useMultistepForm";
import "./App.css";
import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { StepThree } from "./steps/StepTree";
import { StepFour } from "./steps/StepFour";
import { FormEvent, useState } from "react";
import dishesData from "./data/dishes.json";


type FormData = {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  // cart: CartItemData;
  //could't figure out cart data type
  cart: any;
};

// interface CartItemData  {
//   dish: string;
//   count: number
// }

const INITIAL_DATA = {
  meal: "",
  numberOfPeople: 1,
  restaurant: "",
  cart: [{dish: "", count: 0}],
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
    <StepTwo {...data} updateFields={updateFields} dishesData={dishesData["dishes"]}/>,
    <StepThree {...data} updateFields={updateFields} dishesData={dishesData["dishes"]}/>,
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
          The total number of dishes should be greater or equal to the number of people
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
            <button
              type="button"
              onClick={back}
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            disabled={isInvalid}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
