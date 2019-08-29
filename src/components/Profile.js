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

const UserImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 2%;
  background-color: #c6c6c6;
  border: 2px solid #ededed;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${Pizza});
  background-size: cover;
  justify-content: space-around;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.div`
  padding: 10px 0;
  color: #ff0000;
  background-color: #ededed;
  text-shadow: 1px 1px 2px #ededed;
  padding: 1% 2%;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const Addbtn = styled.div`
  border-radius: 50%;
  margin: 10px;
  border: 1px solid #d80000;
  background-color: white;
  color: d80000;
`;

function Profile(props) {
  useEffect(() => {
    props.getReviews();
  }, []);

  return (
    <div className="user-profile">
      <ProfileDiv>
        <UserImg
          className="user-image"
          src={require("../img/Foodie_Icon.png")}
          alt="User Profile Picture"
        ></UserImg>
        <UserName>
          <h2>{props.username}</h2>
        </UserName>
        <NavLink to="/profile/reviewForm">
          <Addbtn>
            <IconButton>
              <Add color="primary" />
            </IconButton>
          </Addbtn>
        </NavLink>
      </ProfileDiv>

      <div className="content">
        <ReviewList />
      </div>
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
