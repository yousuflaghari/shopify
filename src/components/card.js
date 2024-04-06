import React from "react";
import Avatar from "./avatar";
import "./card.css";
const Card = ({ profile, index }) => {
  return (
    <div key={index} className="profile">
      <Avatar
        src={profile.images[0]}
        alt={`Profile ${index}`}
        className="img"
      />
      <div className="brand">{profile.brand}</div>
      <div className="price">${profile.price}</div>
      <div className="title">{profile.title}</div>
    </div>
  );
};
export default Card;
