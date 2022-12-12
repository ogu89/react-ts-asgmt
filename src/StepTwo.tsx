import dishesData  from "./dishes.json"


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
        <>
            <label>Please Select a Reastaurant</label>
            <select >
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
        </>
    )

    
} 