import { React } from "react";
import Avatar from "./avatar";
import "./card.css";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addItem } from "../redux/actions/action";
const Card = ({ profile, index }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("profile", profile);
    dispatch(addItem(profile));
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
