export interface Dish {
    id: number;
    name: string;
    restaurant: string;
    availableMeals: string[];
}
  

export type CartItemData = {
    dish: string;
    count: number;
  };