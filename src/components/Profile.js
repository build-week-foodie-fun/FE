import React, { useState, useEffect } from "react";
import hamburger from "../img/menu-icon.png";
import Add from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import styled from "styled-components";
import Pizza from "../img/pizzaResized.jpg";
import secondary from "../App";

//Components
import ReviewList from "./ReviewList";

export default function Profile(props) {
  const [userPicture, setUserPicture] = [];
  const [userName, setUserName] = [];
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
    border: 1px solid #ff0000;
    background-color: #d80000;
    color: white;
  `;

  useEffect(() => {
    axios
      .get("https://buildweek-foodie1.herokuapp.com/auth/api/users/id")
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
          <h2>Test</h2>
        </UserName>
        <Addbtn>
          <IconButton>
            <Add color="secondary" />
          </IconButton>
        </Addbtn>
      </ProfileDiv>

      <div className="content"></div>
    </div>
  );
}
