import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../img/Foodie_Icon.png";
import SearchIcon from '@material-ui/icons/Search'
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
    root: {
        borderTop: "1.5px solid #EDEDED",
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        borderRight: "1.5px solid #EDEDED",
        paddingTop: 50,
    },
    textField: {
        width: '100%',
    },
    items: {
        height: "100%",
    },
    reviews: {
        paddingLeft: 35,
        paddingTop: 50,
    },
    logo: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    resetFiltersBtn: {
        width: '50%',
        marginTop: 10,
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
    },
    search: {
        position: 'relative',
        backgroundColor: 'white',

        '&:hover': {
            color: 'red',
            backgroundColor: 'white',
        },
        marginRight: 2,
        width: '100%',
    },
});


const FilterReview = props => {
    const classes = useStyles();
    const userId = parseInt(localStorage.getItem("user_id"));
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        let filteredReviews = props.reviews.filter(review => {
            return userId === review.user_id;
        });
        setUserReviews(filteredReviews);
    }, [props.reviews]);
    // declared state for filter input
    const [restaurant, setRestaurant] = useState({
        restaurant_name: "",
        food_rating: "",
        item_name: "",
        price: "",
    });

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

            //Everything is undefined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name === ""
                && restaurant.price === "") {
                return review;
            }
            //Everything is defined
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== ""
                && restaurant.price !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }
            //Restaurant name && item rating && item name +
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== ""
                && restaurant.price === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            //Item rating && item name && price +
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== ""
                && restaurant.price !== "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }
            //Item name && price && restaurant name +
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== ""
                && restaurant.price !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }
            //price && restaurant name && item rating +
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === ""
                && restaurant.price !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }

            //Restaurant name is defined and item rating
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === ""
                && restaurant.price === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            //Restaurant name and item name
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== ""
                && restaurant.price === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())) {
                    return review;
                }
            }

            //Restaurant name and price  +
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name === ""
                && restaurant.price !== "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }

            //Item rating and item name
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name !== ""
                && restaurant.price === "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }

            //Item rating and price
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === ""
                && restaurant.price !== "") {
                if (`${review.price}` === restaurant.price
                    && `${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }

            //Item name and price
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== ""
                && restaurant.price !== "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())
                    && `${review.price}` === restaurant.price) {
                    return review;
                }
            }

            // Restaurant name is defined
            if (restaurant.restaurant_name !== ""
                && restaurant.food_rating === ""
                && restaurant.item_name === ""
                && restaurant.price === "") {
                if (review.restaurant_name.toLowerCase().includes(restaurant.restaurant_name.toLowerCase())) {
                    return review;
                }
            }
            // Item name is defined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name !== ""
                && restaurant.price === "") {
                if (review.item_name.toLowerCase().includes(restaurant.item_name.toLowerCase())) {
                    return review;
                }
            }
            // Rating is defined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating !== ""
                && restaurant.item_name === ""
                && restaurant.price === "") {
                if (`${review.food_rating}` === restaurant.food_rating) {
                    return review;
                }
            }
            //Price is defined
            if (restaurant.restaurant_name === ""
                && restaurant.food_rating === ""
                && restaurant.item_name === ""
                && restaurant.price !== "") {
                if (`${review.price}` === restaurant.price) {
                    return review;
                }
            }
        }
    );

    const resetFilters = () => {
        setRestaurant({
            restaurant_name: "",
            food_rating: "",
            item_name: "",
            price: "",
        });

    };

    return (
        <Container>
            <Grid layout={"row"} container className={classes.root}>
                <Grid item xs={12} sm={3} alignItems={"center"} className={classes.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <Avatar alt="Logo" src={Logo} className={classes.logo}/>
                        <label>Filter Restaurant</label>
                        <div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <input
                                    type="text"
                                    name="restaurant_name"
                                    values={restaurant.restaurant_name}
                                    onChange={handleChange}
                                    placeholder='    Restaurant name'
                                    className={classes.textField}
                                />
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <input
                                    type="text"
                                    name="food_rating"
                                    values={restaurant.food_rating}
                                    onChange={handleChange}
                                    placeholder='    Food rating'
                                    className={classes.textField}
                                />
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <input
                                    type="text"
                                    name="item_name"
                                    values={restaurant.item_name}
                                    onChange={handleChange}
                                    placeholder='    Item name'
                                    className={classes.textField}
                                />
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <input
                                    type="number"
                                    name="price"
                                    values={restaurant.price}
                                    onChange={handleChange}
                                    placeholder='    Price'
                                    className={classes.textField}
                                />
                            </div>
                        </div>
                    </form>
                    <button onClick={() => resetFilters()} className={classes.resetFiltersBtn}>Reset Filters</button>
                </Grid>

                {userReviews.length === 0 ?
                    <div>
                        <h3 style={{textAlign: "center", margin: "50px"}}>
                            Add Your First Restuarant Review!
                        </h3>
                    </div>
                    :
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={2} justify={"center"} alignItems={"center"}
                              className={classes.reviews}>
                            {filteredItems.length > 0 && filteredItems.map(item => {
                                return (
                                    <Grid xs={12} sm={4} md={3} item>
                                        <div className={classes.items}>
                                            <ReviewCard
                                                key={item.id}
                                                id={item.id}
                                                resName={item["restaurant_name"]}
                                                itemName={item["item_name"]}
                                                itemImgUrl={item["photo_of_order"]}
                                                foodRating={item["food_rating"]}
                                                price={item.price}
                                            />
                                        </div>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Container>
    );
};

export default FilterReview;
