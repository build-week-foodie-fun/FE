import React, { useEffect } from "react";
import Add from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Pizza from "../img/pizzaResized.jpg";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";
import { NavLink } from "react-router-dom";

//Components
import ReviewList from "./ReviewList";
import { Link } from "@material-ui/core";
import ReviewForm from "./ReviewForm";
import FilterReview from "./Filter";

const UserImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  border: 2px solid #d80000;
`;

const HeaderImg = styled.img`
  width: 100%;
  height: 200px;
  margin: 2rem 0;
  object-fit: cover;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserName = styled.h2`
  width: 100%;
  padding: 15px 30px;

  color: #ff0000;

  border-radius: 30px;
  margin-bottom: 30px;
  word-wrap: break-word;
`;

const LeftInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2%;
`;

// const Addbtn = styled.button`
//   border-radius: 50%;
//   margin: 10px;
//   border: 2px solid #d80000;
//   background-color: white;
//   color: d80000;
// `;

function Profile(props) {
  useEffect(() => {
    props.getReviews();
  }, []);

  return (
    <div className="Profile-page">
      <div className="user-profile">
        <HeaderImg src={require("../img/pizza.jpg")} alt="Food Banner" />
      </div>
      <UserInfo>
        <LeftInfo>
          <UserImg
            className="user-image"
            src={require("../img/ProfilePic.jpg")}
            alt="User Profile Picture"
          ></UserImg>
          <UserName>Hello, {props.username}</UserName>
        </LeftInfo>

        <NavLink to="/profile/reviewForm">
          <button Id="AddReviewBtn">+</button>
        </NavLink>
      </UserInfo>
      <div className="content">
        <FilterReview reviews={props.reviews} />
        {/* <ReviewList /> */}
      </div>
    </div>
  );
}

const mapPropsToState = state => {
  return {
    username: state.reviews.user,
    reviews: state.reviews.reviews,
  };
};

export default connect(
  mapPropsToState,
  { getReviews },
)(Profile);
