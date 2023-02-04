import { Route, Routes } from "react-router-dom";

import AllFoodPage from "./pages/AllFood";
import NewFoodPage from "./pages/NewFood";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import FoodDetails from "./components/food/FoodDetails";
import AllDeliveriesPage from "./pages/AllDeliveries";
import NewDeliveryPage from "./pages/NewDelivery";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFoodPage />} />
        <Route path="/mealmap" element={<AllFoodPage />} />
        <Route path="/food/:foodId" element={<FoodDetails />} />
        <Route path="/new-food" element={<NewFoodPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/deliveries" element={<AllDeliveriesPage />} />
        <Route path="/new-delivery" element={<NewDeliveryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
