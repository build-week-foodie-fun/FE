import React, { useState, useEffect } from "react";
import Add from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import {connect} from "react-redux";
import ReviewList from "./ReviewList";

function Profile(props) {
  const [userPicture, setUserPicture] = [];
  const [userName, setUserName] = [];
  useEffect(() => {
    axios
      .get("https://buildweek-foodie1.herokuapp.com/auth/api/users/id")
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
      <div className="reviewList"></div>
        <ReviewList/>
    </div>

  );
}
// const mapPropsToState = state => {
//     return {
//         username: state.username,
//     }
// };
//
// export default connect(mapPropsToState, {})(Profile);
export default Profile;