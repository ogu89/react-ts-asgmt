import "../styles/progressBar.css";
import { TiTick } from "react-icons/ti";

type Props = {
  currentStep: number
};

export function ProgressBar({ currentStep }: Props) {
  const steps = ["Step 1", "Step 2", "Step 3", "Review"];
  return (
    <>
      <div className="flex justify-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep + 1 === i + 1 && "active"} ${
              i + 1 < currentStep + 1 && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep + 1 ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
}
