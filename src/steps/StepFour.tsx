import { FormWrapper } from "../FormWrapper";


type StepFourDataProps = {
    meal: string;
    numberOfPeople: number;
    restaurant: string;
    dish: string;
    numberOfServings: number;
} 



export function StepFour({meal, numberOfPeople, restaurant, dish, numberOfServings}:StepFourDataProps) {
    return (
        <FormWrapper title="Review">
            <h1>Look at this</h1>
            <h2>Meal: {meal}</h2>
            <h2>Number of People: {numberOfPeople}</h2>
            <h2>Restaurant: {restaurant}</h2>
            <h2>Dish: {dish}</h2>
            <h2>Number of servings: {numberOfServings}</h2>
        </FormWrapper>
    )
} 