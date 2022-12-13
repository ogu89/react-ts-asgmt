import { FormWrapper } from "../FormWrapper";

type StepOneData = {
    meal: string,
    numberOfPeople: number
}

type StepOneProps= StepOneData & {
    
    updateFields: (fields: Partial<StepOneData>) => void
}

export function StepOne({meal, numberOfPeople, updateFields}: StepOneProps) {
    // updateFields({ })
    
    return (
        <FormWrapper title="Food Feeling">
            <label>Please Select a meal</label>
            <select value={meal} onChange={e => updateFields({meal: e.target.value}) }>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
            <label>Please Enter Number of People</label>
            <input required type="number" id="people" name="people" value={numberOfPeople} onChange={e => updateFields({numberOfPeople: Number(e.target.value)}) } min="1" max="10" />
        </FormWrapper>
    )
} 