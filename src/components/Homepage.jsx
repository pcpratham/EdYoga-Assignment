import React from "react";
import "./Homepage.css";
import PaymentText from "./PaymentText";
import PayInfo from "./PayInfo";

const Homepage = () => {
  return (
    <div className="bg-setter">
      <div className="container">
        <PaymentText />
        <PayInfo />
      </div>
    </div>
  );
};

export default Homepage;
