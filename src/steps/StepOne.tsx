import { FormWrapper } from "../components/FormWrapper";
import { CartItemData } from "../types";

type StepOneData = {
  meal: string;
  numberOfPeople: number;
  cart: CartItemData[];
};

type StepOneProps = StepOneData & {
  updateFields: (fields: Partial<StepOneData>) => void;
};

export function StepOne({ meal, numberOfPeople, updateFields }: StepOneProps) {
  // updateFields({ })

  return (
    <FormWrapper title="Food Feeling">
      <div className="form-item">
        <label className="label">Please Select a meal</label>
        <select
          value={meal}
          onChange={(e) => updateFields({ meal: e.target.value, cart: [] })}
          className="input"
          required
        >
          <option value="" disabled>
            ---
          </option>
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </select>
      </div>
      <div className="form-item">
        <label className="label">Please Enter Number of People</label>
        <input
          required
          type="number"
          id="people"
          name="people"
          value={numberOfPeople}
          onChange={(e) =>
            updateFields({ numberOfPeople: Number(e.target.value), cart: [] })
          }
          min="1"
          max="10"
          className="input"
        />
      </div>
    </FormWrapper>
  );
}
