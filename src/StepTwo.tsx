import dishesData  from "./dishes.json"
import { FormWrapper } from "./FormWrapper";


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}



export function StepTwo() {

    const dishes: Dish[] = dishesData["dishes"];
    console.log(dishes)
    return (
        <FormWrapper title="Restaurant Info">
            <label>Please Select a Reastaurant</label>
            <select >
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
        </FormWrapper>
    )

    
} 