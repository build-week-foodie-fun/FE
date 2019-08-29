/* you may need to make some changes to this to flow well with the profile */

//first line of actual component file delete all above
import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import Grid from "@material-ui/core/Grid";

const FilterReview = props => {
    const userId = parseInt(localStorage.getItem("user_id"));
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        let filteredReviews = props.reviews.filter(review => {
            return userId === review.user_id;
        });
        setUserReviews(filteredReviews);
    }, [props.reviews]);
    // declared state for filter input
    const [restaurant, setRestaurant] = useState({restaurant_name: "", food_rating: "", item_name: ""});

    // controlling the state while someone is typing into the input
    const handleChange = event => {
        setRestaurant({
            ...restaurant,
            [event.target.name]: event.target.value,
        });
    };

    // the form will automatically generate the re-render, so this just prevents it from refreshing, no submit button neededed
    const handleSubmit = event => {
        event.preventDefault();
    };

    // This is the logic for the filter method which filters through the reviews, and returns the ones that match in a new array
    const findByRestaurant = userReviews.filter(review => {
        return review.restaurant_name
            .toLowerCase()
            .includes(restaurant.restaurant_name.toLowerCase())
    });


    const filteredItems = userReviews.filter(review => {
            console.log('typeof review.food_rating ', typeof `${review.food_rating}`);
            console.log('typeof restaurant.food_rating ', typeof restaurant.food_rating);
            //Everything is undefined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name === "") {
                return review;
            }
            //Everything is defined
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            //Restaurant name is defined and item rating
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            //Restaurant name and item name
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())) {
                    return review;
                }
            }
            //Item rating and item name
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            // Restaurant name is defined
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())) {
                    return review;
                }
            }
            // Item name is defined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())) {
                    return review;
                }
            }
            // Rating is defined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === "") {
                if (`${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
        }
    );


    return (
        <div>
            {/* {The Input Form} */}
            <form onSubmit={handleSubmit}>
                <label>Filter Restaurant</label>
                <input
                    type="text"
                    name="restaurant_name"
                    values={restaurant.restaurant_name}
                    onChange={handleChange}
                    placeholder='Restaurant name'
                />
                <input
                    type="text"
                    name="food_rating"
                    values={restaurant.food_rating}
                    onChange={handleChange}
                    placeholder='Food rating'
                />
                <input
                    type="text"
                    name="item_name"
                    values={restaurant.item_name}
                    onChange={handleChange}
                    placeholder='Item name'
                />
            </form>
            {/* {Mapping over the returned array from findByRestuarant to render the
            ReviewCard component with the matching information} You may need to change prop names
            To match with the review card*/}
            <div>
                {console.log("filteredItems", filteredItems)}
                <Grid container spacing={2} justify={"center"} alignItems={"center"}>
                    {filteredItems.length > 0 && filteredItems.map(item => {
                        return (
                            <Grid xs={4} item>
                                <ReviewCard
                                    key={item.id}
                                    id={item.id}
                                    resName={item["restaurant_name"]}
                                    itemName={item["item_name"]}
                                    itemImgUrl={item["photo_of_order"]}
                                    foodRating={item["food_rating"]}
                                    price={item.price}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default FilterReview;
