import { useNavigate } from "react-router-dom"

import NewDeliveryForm from "../components/delivery/NewDeliveryForm";

function NewDeliveryPage () {
    const navigate = useNavigate();

    function onDeliveryHandler (deliveryData) {
        fetch("https://mealmap-f3485-default-rtdb.firebaseio.com/delivery.json",
        {
            method: "POST",
            body: JSON.stringify(deliveryData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            navigate("/", { replace: true });
        })
    }

    return (
        <section>
            <div>Add New Delivery</div>
            <NewDeliveryForm onAddDelivery={onDeliveryHandler}/>
        </section>
    )
}

export default NewDeliveryPage