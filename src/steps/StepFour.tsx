import { FormWrapper } from "../components/FormWrapper";
import { CartItemData } from "../types";

type StepFourDataProps = {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  cart: CartItemData[];
};

// type CartItemData = {
//     dish: string;
//     count: number;
//   };

export function StepFour({
  meal,
  numberOfPeople,
  restaurant,
  cart,
}: StepFourDataProps) {
  console.log(cart);
  return (
    <FormWrapper title="Review">
      <div>
        <h2 className="review-title">
          Order confirmation
        </h2>
        <div className="review-item">
          <h5 className="review-text">Meal</h5>
          <h5 className="review-text">{meal}</h5>
        </div>
        <div className="review-item">
          <h5 className="review-text">Number of People</h5>
          <h5 className="review-text">{numberOfPeople}</h5>
        </div>
        <div className="review-item">
          <h5 className="review-text">Restaurant</h5>
          <h5 className="review-text">{restaurant}</h5>
        </div>
        <div className="review-item">
          <h5 className="review-text">Dish</h5>
          <div className=" p-3 bg-white border rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul >
                {cart.map((item) => (
                  <ul key={item.dish}>
                    <p className="text-red-500 font-bold truncate dark:text-white">
                      {`${item.dish} - ${item.count}`}
                    </p>
                  </ul>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>cart: {cart}</h2> */}
    </FormWrapper>
  );
}
