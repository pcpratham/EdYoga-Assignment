import React from "react";
import book from "../icons/Icon.png";
import clock from "../icons/Icon-1.png";
import live from "../icons/Icon-2.png";
import graduation from "../icons/Icon-3.png";
import ads from "../icons/Icon-4.png";
import "./PaymentText.css";

const PaymentText = () => {
  return (
    <div className="top-level">
      <div>
        <h1>
          Access curated courses worth <br /> 
          <span className="price-1">₹ </span>
          <span className="price-1">
          
          <div className="red-line"></div>
           18,500</span> at just{" "}
          <span className="price">₹ 99</span> per year!
        </h1>
      </div>
      <div className="icons-div">
        <img src={book} />
        <p>
          <span>100+ </span>
          Job relevant courses
        </p>
      </div>
      <div className="icons-div">
        <img src={clock} />
        <p>
          <span>20,000+ </span>
          Hours of content
        </p>
      </div>
      <div className="icons-div">
        <img src={live} />
        <p>
          <span>Exclusive </span>
          webinar access
        </p>
      </div>
      <div className="icons-div">
        <img src={graduation} />
        <p>
          Scholarship worth
          <span> ₹ 94,500</span>
        </p>
      </div>
      <div className="icons-div">
        <img src={ads} />
        <p>
          <span>Ad Free </span>
          learning experience
        </p>
      </div>
    </div>
  );
};

export default PaymentText;
