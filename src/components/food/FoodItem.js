import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import classes from "./FoodItem.module.css"
import Card from "../ui/Card"
import FavoritesContext from "../../store/favorites-context";

function FoodItem (props) {
    const navigate = useNavigate();
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            console.log(props.id)
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                escription: props.description,
                image: props.image,
                location: props.location
            })
        }
    }

    function removeFoodHandler() {
        fetch("https://mealmap-f3485-default-rtdb.firebaseio.com/food/" + props.id + ".json",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            navigate("/", { replace: true });
            window.location.reload()
            console.log('DELETED')
        })
    }
    
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.location}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeFoodHandler}>Remove Food</button>
                </div>
            </Card>
        </li>
    )
}

export default FoodItem