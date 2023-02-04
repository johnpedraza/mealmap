import { useState, useEffect } from "react";

import FoodList from "../components/food/FoodList";

function AllFoodPage () {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFood, setLoadedFood] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://mealmap-f3485-default-rtdb.firebaseio.com/food.json"
    ).then(response => {
      return response.json();
    }).then(data => {
      const food = [];
      
      for (const key in data) {
        const food_singular = {
          id: key,
          ...data[key]
        }
        food.push(food_singular); 
      }

      setIsLoading(false);
      setLoadedFood(food);
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
      <section>
          <h1>All Food</h1>
          <FoodList food={loadedFood} />
      </section>
  )
}

export default AllFoodPage