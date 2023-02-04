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
            <p>{loadedFood.description}</p>
            <h2>Food is at {loadedFood.location}</h2>
            <h2>First, navigate to the building marked on the map below.</h2>
            <LineDrawer location={loadedFood}/>
            <h2>Then scan this QR code to enter the Augmented Reality Scene</h2>
            <QRCodeGenerator destination={destination}/>
            <h2>Finally, localize yourself by pointing your camera toward the AprilTag near the entrance. They look something like this:</h2>
            <img src="//cdn.shopify.com/s/files/1/0803/9211/files/tag36h10_0_large.png?v=1487041161" width='150' alt="AprilTag"/>
        </div>
    )
}

export default FoodDetails