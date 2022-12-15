import { FormWrapper } from "../components/FormWrapper";


type StepFourDataProps = {
    meal: string;
    numberOfPeople: number;
    restaurant: string;
    cart: any;
} 



export function StepFour({meal, numberOfPeople, restaurant, cart}:StepFourDataProps) {
    console.log(cart);
    return (
        <FormWrapper title="Review">
            <h1>Look at this</h1>
            <h2>Meal: {meal}</h2>
            <h2>Number of People: {numberOfPeople}</h2>
            <h2>Restaurant: {restaurant}</h2>
            {/* <h2>cart: {cart}</h2> */}
        </FormWrapper>
    )
} 