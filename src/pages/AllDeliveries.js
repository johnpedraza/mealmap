import { useState, useEffect } from "react";

import DeliveryList from "../components/delivery/DeliveryList"

function AllDeliveriesPage () {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDeliveries, setLoadedDeliveries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://mealmap-f3485-default-rtdb.firebaseio.com/delivery.json"
    ).then(response => {
      return response.json();
    }).then(data => {
      const deliveries = [];
      
      for (const key in data) {
        const delivery_singular = {
          id: key,
          ...data[key]
        }
        deliveries.push(delivery_singular); 
      }

      setIsLoading(false);
      setLoadedDeliveries(deliveries);
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
          <h1>All Deliveries</h1>
          <DeliveryList deliveries ={loadedDeliveries} />
      </section>
  )
}

export default AllDeliveriesPage