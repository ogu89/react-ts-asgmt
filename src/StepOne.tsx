export function StepOne() {
    return (
        <>
            <label>Please Select a meal</label>
            <select >
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
            <label>Please Enter Number of People</label>
            <input type="number" id="people" name="people" min="1" max="10" />
        </>
    )
} 