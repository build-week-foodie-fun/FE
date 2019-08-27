import React, { useState, useEffect } from "react";
import hamburger from "../img/menu-icon.png";
import Add from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

export default function Profile(props) {
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
        <img src=""></img>
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
    </div>
  );
}
