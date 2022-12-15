import { useEffect, useState } from "react";
import { FormWrapper } from "../components/FormWrapper";
import { Dish } from "../types";
import { CartItemData } from "../types";

type StepThreeData = {
  meal: string;
  restaurant: string;
  cart: CartItemData[];
};

type StepThreeDataProps = StepThreeData & {
  updateFields: (fields: Partial<StepThreeData>) => void;
  dishesData: Dish[];
};

export function StepThree({
  cart,
  meal,
  restaurant,
  updateFields,
  dishesData,
}: StepThreeDataProps) {
  const filteredDishes: Dish[] = dishesData.filter(
    (dish) =>
      dish.availableMeals.includes(meal) && dish.restaurant === restaurant
  );
  const dishOptions: Dish[] = filteredDishes.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name)
  );

  const [dish, setDish] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [tempCart, setTempCart] = useState<CartItemData[]>(cart);
  const [error, setError] = useState<string>("");
  const disabledButton = dish === "";

  useEffect(() => {
    updateFields({ cart: tempCart });
  }, [tempCart]);

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
    <FormWrapper>
      <div className="form-item">
        <label className="label">Please Select a Dish</label>
        <select
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          className="input"
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
      <div className="form-item">
        <label className="label">Please enter no. of servings</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          min={1}
          className="input"
        />
      </div>
      <div className="flex justify-between w-6/12">
        <div>
          <button
            disabled={disabledButton}
            type="button"
            onClick={addOrder}
            className={`add-button ${disabledButton && "cursor-not-allowed"}`}
          >
            Add
          </button>
        </div>
      <div>
        {tempCart.map((item) => (
          <div key={item.dish}>
            <h5 className="review-text">{`${item.dish} - ${item.count}`}</h5>
            <button
              type="button"
              onClick={() => {
                deleteItem(item.dish);
              }}
              className="delelte-button"
            >
              Delete
            </button>
          </div>
        ))}
        </div>
      </div>
    </FormWrapper>
  );
}
