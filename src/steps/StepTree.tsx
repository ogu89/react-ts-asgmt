
import { useState } from "react";
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
    const [count, setCount] = useState<number>(0)
    const [tempCart, setTempCart] = useState<CartItemData[]>([])

    // function updateCart(){
    //     setData(prev => {
    //       return {...prev, ...fields}
    //     })
    //   }

    function addOrder(){
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
                <select value={dish} onChange={e => setDish(e.target.value)} >
                    {dishOptions.map(e => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                    ))}
                </select>
                <label>Please enter no. of servings</label>
                <input value={count} onChange={e => setCount(Number(e.target.value)) } required min={1} type="number" />
                <button type="button" onClick={addOrder}>Add</button>
                <div>
                    {tempCart.map((item) => (
                        <div>
                            {`${item.dish} - ${item.count}`}
                            <button type="button" onClick={() => {deleteItem(item.dish)}}>Deltee</button>
                        </div>
                    ))}
                </div>
        </FormWrapper>
    )
} 