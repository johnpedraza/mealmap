import DeliveryItem from "./DeliveryItem"
import classes from "./FoodList.module.css"

function DeliveryList (props) {
    return (
        <ul className={classes.list}>
            {props.deliveries.map(delivery => 
                <DeliveryItem 
                    key={delivery.id} 
                    id={delivery.id} 
                    image={delivery.image}
                    title={delivery.title}
                    location={delivery.location}
                    description={delivery.description} 
                />
            )}
        </ul>
    )
}

export default DeliveryList