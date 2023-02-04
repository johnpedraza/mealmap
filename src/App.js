import { Route, Routes } from "react-router-dom";

import AllFoodPage from "./pages/AllFood";
import NewFoodPage from "./pages/NewFood";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllFoodPage />} />
        <Route path="/new-food" element={<NewFoodPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
