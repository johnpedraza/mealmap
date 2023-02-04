import { useRef } from "react";

import Card from "../ui/Card"
import classes from "./NewFoodForm.module.css"

function NewDeliveryForm (props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const locationInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler (event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredLocation = locationInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const deliveryData = {
            title: enteredTitle,
            image: enteredImage,
            location: enteredLocation,
            description: enteredDescription,
        }

        props.onAddDelivery(deliveryData);
    }  
    
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Delivery Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Food Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="location">Food Location</label>
                    <input type="text" required id="location" ref={locationInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Food Description</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Order Delivery!</button>
                </div>
            </form>
        </Card>
    )
}

export default NewDeliveryForm