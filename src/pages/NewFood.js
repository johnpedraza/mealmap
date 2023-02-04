import { useNavigate } from "react-router-dom"

import NewFoodForm from "../components/food/NewFoodForm"

function NewFoodPage () {
    const navigate = useNavigate();

    function onFoodHandler (foodData) {
        fetch("https://mealmap-f3485-default-rtdb.firebaseio.com/food.json",
        {
            method: "POST",
            body: JSON.stringify(foodData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            navigate("/", { replace: true });
        })
    }

    return (
        <section>
            <div>Add New Food</div>
            <NewFoodForm onAddFood={onFoodHandler}/>
        </section>
    )
}

export default NewFoodPage