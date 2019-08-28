import React, { useEffect } from "react";
import Add from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";
import ReviewList from "./ReviewList";

function Profile(props) {
  useEffect(() => {
    props.getReviews();
  }, []);

  return (
    <div className="user-profile">
      <div className="user-picture">
        <img
          src={require("../img/Foodie_Icon.png")}
          alt="User Profile Picture"
        ></img>
      </div>
      <div className="user-name">
        <h2>{props.username}</h2>
      </div>
      <div className="add-btn">
        <IconButton>
          <Add color="primary" />
        </IconButton>
      </div>
      <div className="viewBar">
        <FilterListIcon />
      </div>
      {/* <div className="reviewList"></div> */}
      <ReviewList />
    </div>
  );
}

const mapPropsToState = state => {
  return {
    username: state.reviews.user,
  };
};

export default connect(
  mapPropsToState,
  { getReviews },
)(Profile);
