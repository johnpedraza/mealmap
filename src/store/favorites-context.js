import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteFood) => {},
    removeFavorite: (foodId) => {},
    itemIsFavorite: (foodId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteFood) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteFood)
        })
    }

    function removeFavoriteHandler(foodId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(food => food.id !== foodId)
        })
    }

    function itemIsFavoriteHandler(foodId) {
        return userFavorites.some(food => food.id === foodId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext