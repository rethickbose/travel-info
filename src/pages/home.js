import React from "react";
import Input from "../components/input";

const Home = () => {
  const mystyle = {
    color: "white",
    margin: "10px",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <div>
        <h4 style={mystyle}>TRAVEL INFORMATION SERVICE</h4>
      </div>{" "}
      <br />
      <Input />
      <br /> <br />
    </div>
  );
};

export default Home;
