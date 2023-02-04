import { useContext } from "react"
import FavoritesContext from "../store/favorites-context"
import FoodList from "../components/food/FoodList"

function FavoritesPage () {
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorites.</p>
    } else {
        content = <FoodList food={favoritesCtx.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage