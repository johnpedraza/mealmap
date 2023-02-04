import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import LineDrawer from "../canvas/LineDrawer";
import QRCodeGenerator from "../canvas/QRCodeGenerator";

function FoodDetails (props) {
    const params = useParams()
    const foodId = params.foodId

    const [isLoading, setIsLoading] = useState(true);
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch(
        "https://mealmap-f3485-default-rtdb.firebaseio.com/food/" + foodId + ".json"
        ).then(response => {
        return response.json();
        }).then(data => {

        const food = {
            id: foodId,
            title: data.title,
            image: data.image,
            location: data.location,
            description: data.description
        }

        setIsLoading(false);
        setLoadedFood(food);
        })
    }, [])

    if (isLoading) {
        return (
            <h1>LOADING</h1>
        )
    }

    let destination = ""
    let destinations = require("../../assets/destinations.json")
    if (destinations[0].dests.includes(loadedFood.location)) {
        destination = destinations[1][loadedFood.location]
    } else {
        destination = "www.tartanhacks.com"
    }

    return (
        <div>
            <h1>{loadedFood.title}</h1>
            <img src={loadedFood.image} />
            <h2>Food is at {loadedFood.location}</h2>
            <p>{loadedFood.description}</p>
            <QRCodeGenerator destination={destination}/>
            <LineDrawer />
        </div>
    )
}

export default FoodDetails