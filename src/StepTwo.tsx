import dishesData  from "./dishes.json"
import { FormWrapper } from "./FormWrapper";


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}

type StepTwoData = {
    restaurant: string  
}

type StepTwoDataProps =  StepTwoData & {
    updateFields: (fields: Partial<StepTwoData>) => void  
} 



export function StepTwo({restaurant, updateFields}: StepTwoDataProps) {

    const dishes: Dish[] = dishesData["dishes"];
    // console.log(dishes)
    return (
        <FormWrapper title="Restaurant Info">
            <label>Please Select a Reastaurant</label>
            <select value={restaurant} onChange={e => updateFields({restaurant: e.target.value}) }>
                <option value="Otoya">Otoya</option>
                <option value="Maccas">Maccas</option>
                <option value="KFC">KFC</option>
            </select>
        </FormWrapper>
    )

    
} 