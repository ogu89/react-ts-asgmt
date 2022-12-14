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
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Select a meal</label>
            <select value={meal} onChange={e => updateFields({meal: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option value="" disabled >---</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Enter Number of People</label>
            <input required type="number" id="people" name="people" value={numberOfPeople} onChange={e => updateFields({numberOfPeople: Number(e.target.value)}) } min="1" max="10" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        </FormWrapper>
    )
} 