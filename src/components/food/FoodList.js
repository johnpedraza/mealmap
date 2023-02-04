import FoodItem from "./FoodItem"
import classes from "./FoodList.module.css"

function FoodList (props) {
    return (
        <ul className={classes.list}>
            {props.food.map(food => 
                <FoodItem 
                    key={food.id} 
                    id={food.id} 
                    image={food.image}
                    title={food.title}
                    location={food.location}
                    description={food.description} 
                />
            )}
        </ul>
    )
}

export default FoodList