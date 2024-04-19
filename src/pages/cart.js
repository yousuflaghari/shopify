import React from "react";
import Avatar from "../components/avatar";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <Avatar
            src={item.images[0]}
            alt={`Profile ${index}`}
            className="img"
          />
          <div className="brand">{item.brand}</div>
          <div className="price">${item.price}</div>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
