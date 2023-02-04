import Card from "../ui/Card"
import classes from "./NewFoodForm.module.css"

function NewFoodForm () {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Food Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Food Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Food Address</label>
                    <input type="text" required id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Food Description</label>
                    <textarea id="description" required rows="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Food</button>
                </div>
            </form>
        </Card>
    )
}

export default NewFoodForm