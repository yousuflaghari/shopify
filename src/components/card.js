import { React } from "react";
import Avatar from "./avatar";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = ({ profile, index, setCartItem }) => {
  const handleClick = () => {
    console.log("profile", profile);
    setCartItem((item) => [...item, profile]);
  };

  return (
    <div key={index} className="profile">
      {profile && (
        <>
          <Avatar
            src={profile.images[0]}
            alt={`Profile ${index}`}
            className="img"
          />
          <div className="brand">{profile.brand}</div>
          <div className="price">${profile.price}</div>
          <div className="title">{profile.title}</div>

          <div className="option">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              color="red"
              style={{ marginTop: "10px" }}
              onClick={handleClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
