import dishesData  from "../dishes.json"
import { FormWrapper } from "../FormWrapper";


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}

type StepTwoData = {
    meal: string
    restaurant: string  
}

type StepTwoDataProps =  StepTwoData & {
    updateFields: (fields: Partial<StepTwoData>) => void  
} 



export function StepTwo({meal, restaurant, updateFields}: StepTwoDataProps) {

    const dishes: Dish[] = dishesData["dishes"];
    const restaurants: Dish[] = dishes.filter(dish =>
        dish.availableMeals.includes(meal));

    const uniqueRestraurants: Dish[] = restaurants.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.restaurant === value.restaurant
        ))
    )

    // const uniqueRestraurant = restaurants.filter((value, index, self) =>
    //     value.availableMeals.includes(meal) && index === self.findIndex((t) => (
    //         t.restaurant === value.restaurant && t.restaurant 
    //     ))
    // )
    
        // const prods = products.filter((value, index, array) => index == array.findIndex(item => item.id == value.id));

    

    // const unique = [...new Map(restaurants.map(itme => [item["restaurant"], item])).values()]
    // const unique = [...new Map(arr.map(item => [item[key], item])).values()]

    // function getUniqueListBy(arr, key) {
    //     return [...new Map(arr.map(item => [item[key], item])).values()]
    // }
    // const arr1 = getUniqueListBy(arr, 'place')
    // const restaurants = dishes.filter
        
    // let obj.arr = obj.arr.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //       t.place === value.place && t.name === value.name
    //     ))
    //   )
    

    return (
        <FormWrapper title="Restaurant Info">
            <label>Please Select a Reastaurant</label>
            <select value={restaurant} onChange={e => updateFields({restaurant: e.target.value}) }>
                {uniqueRestraurants.map((restaurant) =>(
                    <option key={restaurant.id}  value={restaurant.restaurant}>{restaurant.restaurant}</option>
                ))}
            </select>
        </FormWrapper>
    )

    
} 