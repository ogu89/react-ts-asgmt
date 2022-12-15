import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { StepThree } from "./steps/StepTree";
import { StepFour } from "./steps/StepFour";
import { ProgressBar } from "./components/ProgressBar";
import dishesData from "./data/dishes.json";
import { CartItemData } from "./types";
import { Alert } from "./components/Alert";
import { PreviousNextButton } from "./components/PreviousNextButton";

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
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [error, setError] = useState<boolean>(false);

  const totalDishesresult = data.cart.reduce((accumulator, obj) => {
    return accumulator + obj.count;
  }, 0);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    // steps,
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
    if (isInvalid || isNotEnough) return setError(true);
    else if (!isLastStep) {
      setError(false);
      return next();
    } else {
      console.log(data);
      alert("Order Successful");
    }
  }
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <ProgressBar currentStep={currentStepIndex} />
        {step}
        {error && <Alert alertText="Add a Item into cart" />}
        {error && (
          <Alert
            alertText="The total number of dishes should be greater or equal to the number
            of people"
          />
        )}
        <PreviousNextButton
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          setError={setError}
          back={back}
        />
      </form>
    </div>
  );
}

export default App;
