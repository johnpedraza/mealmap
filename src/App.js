import { Route, Routes } from "react-router-dom";

import AllFoodPage from "./pages/AllFood";
import NewFoodPage from "./pages/NewFood";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import FoodDetails from "./components/food/FoodDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFoodPage />} />
        <Route path="/mealmap" element={<AllFoodPage />} />
        <Route path="/food/:foodId" element={<FoodDetails />} />
        <Route path="/new-food" element={<NewFoodPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
