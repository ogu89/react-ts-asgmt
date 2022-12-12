
import dishesData  from "./dishes.json"


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}


export function StepThree() {
    const dishes: Dish[] = dishesData["dishes"];

    console.log(dishes);
    return (
        <>
            <div>
                <label>Please Select a Dish</label>
                <select >
                    <option value="Marinara">Marinara</option>
                    <option value="Poke bowl">Poke bowl</option>
                    <option value="Alfredo">Alfredo</option>
                </select>
                <label>Please enter no. of servings</label>
                <input required min={1} type="number" />
                <button>Add</button>
            </div>
        </>
    )
} 