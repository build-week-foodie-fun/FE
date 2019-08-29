/* you may need to make some changes to this to flow well with the profile */

//first line of actual component file delete all above
import React, {useState} from "react";
import ReviewCard from "./ReviewCard";


const FilterReview = (props) => {
    // declared state for filter input
    const [ restaurant, setRestaurant ] = useState({ restaurant_name: "", });

    // controlling the state while someone is typing into the input
    const handleChange = event => {
        setRestaurant({
            ...restaurant, 
            [event.target.name]: event.target.value
        });
    };

    // the form will automatically generate the re-render, so this just prevents it from refreshing, no submit button neededed
    const handleSubmit = event => {
        event.preventDefault();
    };

    // This is the logic for the filter method which filters through the reviews, and returns the ones that match in a new array
    const findByRestaurant = props.reviews.filter(review => {
        review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
    });

    return (
        <div>
            {/* {The Input Form} */}
            <form onSubmit={handleSubmit}>
                <label>Filter Restuarant</label>
                <input 
                    type="text"
                    name="filterReview"
                    onChange={handleChange}
                />
            </form>
            {/* {Mapping over the returned array from findByRestuarant to render the 
            ReviewCard component with the matching information} You may need to change prop names
            To match with the review card*/}
            <div>
                {findByRestaurant.map(review => {
                return <ReviewCard key={review.id} review={review} />;
                })}
            </div>
        </div>
    );
};

export default FilterReview;