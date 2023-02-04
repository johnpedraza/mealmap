import { Route, Routes } from "react-router-dom";

import AllFoodPage from "./pages/AllFood";
import NewFoodPage from "./pages/NewFood";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllFoodPage />} />
        <Route path="/new-food" element={<NewFoodPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
