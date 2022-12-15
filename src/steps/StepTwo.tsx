import { FormWrapper } from "../FormWrapper";
import {Dish} from "../types";

type StepTwoData = {
  meal: string;
  restaurant: string;
  // could't figure out cart data type
  cart: any;
};

type StepTwoDataProps = StepTwoData &  {
  updateFields: (fields: Partial<StepTwoData>) => void;
  dishesData: Dish[]
};

export function StepTwo({
  meal,
  restaurant,
  cart,
  updateFields,
  dishesData,
}: StepTwoDataProps) {
  const restaurants: Dish[] = dishesData.filter((dish) =>
    dish.availableMeals.includes(meal)
  );

  const uniqueRestraurants: Dish[] = restaurants.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.restaurant === value.restaurant)
  );

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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Please Select a Reastaurant
      </label>
      <select
        value={restaurant}
        onChange={(e) => updateFields({ restaurant: e.target.value, cart: [] })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      >
        <option value="" disabled>
          ---
        </option>
        {uniqueRestraurants.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.restaurant}>
            {restaurant.restaurant}
          </option>
        ))}
      </select>
    </FormWrapper>
  );
}
