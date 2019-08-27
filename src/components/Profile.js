import React, { useState } from "react";

export default function Profile(props) {
  const [userPicture, setUserPicture] = [];

  return (
    <div className="user-profile">
      <div className="navBar">
        <img src="/public/hamburger-menu.svg"></img>
      </div>

      <div className="user-picture">
        <img src="{props}"></img>
      </div>
      <div className="user-name">
        <h2>{props.name}</h2>
      </div>
      <div className="add-btn">
        <button>+</button>
      </div>
    </div>
  );
}
