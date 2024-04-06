import React, { useState } from "react";
import Input from "../components/input";
import "./signin.css";
import Button from "../components/button";
import axios from "axios";

const Signin = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const handleClick = async () => {
    console.log(Name, Password);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: "kminchelle",
        password: "0lelplR",
        expiresInMins: 30,
      });
      console.log(response, "aaaaaaaa");
      const data = response.data;
      console.log(data.lastName);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type === "name") {
      setName(value);
    } else if (type === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="main">
      <div className="container1">
        <div>
          <h1 className="heading1">Sign in</h1>
          <h6 className="paragraph">Stay updated on your professional world</h6>
        </div>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => handleChange(e, "name")}
        />
        <Input
          placeholder="Password"
          onChange={(e) => handleChange(e, "password")}
        />
        <Button
          text="Sign in"
          backgroundColor="blue"
          color="white"
          onClick={handleClick}
        />
        <p className="or">or</p>
        <Button text="Sign in with Apple" backgroundColor="white" />
      </div>
    </div>
  );
};

export default Signin;
