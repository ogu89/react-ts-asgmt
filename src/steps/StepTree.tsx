
import { FormEvent, useState } from "react";
import dishesData  from "../dishes.json"
import { FormWrapper } from "../FormWrapper";


interface Dish {
    id: number,
    name: string,
    restaurant: string,
    availableMeals: string[],
}


type StepThreeData = {
    // dish: string
    // numberOfServings: number
    // cart: CartItemData[]
    meal: string
    restaurant: string
    numberOfPeople: number
}

type StepThreeDataProps =  StepThreeData & {
    updateFields: (fields: Partial<StepThreeData>) => void  
} 

type CartItemData = {
    dish: string;
    count: number
  }
  


export function StepThree({ meal, restaurant, numberOfPeople, updateFields}: StepThreeDataProps) {
    const dishes: Dish[] = dishesData["dishes"];
    const filteredDishes: Dish[] = dishes.filter(dish=>dish.availableMeals.includes(meal) && dish.restaurant === restaurant)
    const dishOptions: Dish[] = filteredDishes.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.name === value.name
        ))
    )

    const [dish, setDish] = useState<string>("")
    const [count, setCount] = useState<number>(1)
    const [tempCart, setTempCart] = useState<CartItemData[]>([])

    const disabledButton = dish === "";

    function addOrder(e:FormEvent){
        setTempCart(current => [...current, {dish: dish, count: count}])

    }


    function deleteItem(itemName:string){
        setTempCart(tempCart.filter ((item) => {
          return item.dish !== itemName
        }))
    };




    console.log(dishOptions);
    return (
        <FormWrapper title="Meal Deatails">
                <label>Please Select a Dish</label>
                <select value={dish} onChange={e => setDish(e.target.value)} required>
                    <option value="" disabled >---</option>
                    {dishOptions.map(e => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                    ))}
                </select>
                <label>Please enter no. of servings</label>
                <input type="number" value={count} onChange={e => setCount(Number(e.target.value)) } min={1}  required/>
                <button disabled={disabledButton} type="button" onClick={addOrder} className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${disabledButton ? "cursor-not-allowed" : ""}`} >Add</button>
                <div>
                    {tempCart.map((item) => (
                        <div key={item.dish}>
                            {`${item.dish} - ${item.count}`}
                            <button type="button" onClick={() => {deleteItem(item.dish)}}>Deltee</button>
                        </div>
                    ))}
                </div>
        </FormWrapper>
    )
} 