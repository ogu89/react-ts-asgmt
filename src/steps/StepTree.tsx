
import dishesData  from "../dishes.json"
import { FormWrapper } from "../FormWrapper";


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}


type StepThreeData = {
    dish: string
    numberOfServings: number
}

type StepThreeDataProps =  StepThreeData & {
    updateFields: (fields: Partial<StepThreeData>) => void  
} 


export function StepThree({dish, numberOfServings, updateFields}: StepThreeDataProps) {
    const dishes: Dish[] = dishesData["dishes"];

    // console.log(dishes);
    return (
        <FormWrapper title="Meal Deatails">
                <label>Please Select a Dish</label>
                <select value={dish} onChange={e => updateFields({dish: e.target.value})} >
                    <option value="Marinara">Marinara</option>
                    <option value="Poke bowl">Poke bowl</option>
                    <option value="Alfredo">Alfredo</option>
                </select>
                <label>Please enter no. of servings</label>
                <input value={numberOfServings} onChange={e => updateFields({numberOfServings: Number(e.target.value)}) } required min={1} type="number" />
                <button>Add</button>
        </FormWrapper>
    )
} 