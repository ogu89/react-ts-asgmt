import { FormEvent, useState } from "react";
import dishesData from "../dishes.json";
import { FormWrapper } from "../FormWrapper";

interface Dish {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

type StepThreeData = {
  // dish: string
  // numberOfServings: number
  // cart: CartItemData[]
  meal: string;
  restaurant: string;
  numberOfPeople: number;
};

type StepThreeDataProps = StepThreeData & {
  updateFields: (fields: Partial<StepThreeData>) => void;
};

type CartItemData = {
  dish: string;
  count: number;
};

export function StepThree({
  meal,
  restaurant,
  numberOfPeople,
  updateFields,
}: StepThreeDataProps) {
  const dishes: Dish[] = dishesData["dishes"];
  const filteredDishes: Dish[] = dishes.filter(
    (dish) =>
      dish.availableMeals.includes(meal) && dish.restaurant === restaurant
  );
  const dishOptions: Dish[] = filteredDishes.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name)
  );

  const [dish, setDish] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [tempCart, setTempCart] = useState<CartItemData[]>([]);
  const [error, setError] = useState<string>("");
  const disabledButton = dish === "";

  function addOrder() {
    if (tempCart.find((x) => x.dish === dish))
      setError("You can't add same dish");
    else {
      setTempCart((current) => [...current, { dish: dish, count: count }]);
      setError("");
    }
  }

  function deleteItem(itemName: string) {
    setTempCart(
      tempCart.filter((item) => {
        return item.dish !== itemName;
      })
    );
  }
  return (
    <FormWrapper title="Meal Deatails">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Please Select a Dish
      </label>
      <div>
        <select
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" disabled>
            ---
          </option>
          {dishOptions.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">
            {error}
          </p>
        )}
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Please enter no. of servings
      </label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        min={1}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button
        disabled={disabledButton}
        type="button"
        onClick={addOrder}
        className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
          disabledButton ? "cursor-not-allowed" : ""
        }`}
      >
        Add
      </button>
      <div>
      {tempCart.map((item) => (
        <div key={item.dish}>
          {`${item.dish} - ${item.count}`}
          <button
            type="button"
            onClick={() => {
              deleteItem(item.dish);
            }}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Delete
          </button>
        </div>
      ))}
      </div>
    </FormWrapper>
  );
}