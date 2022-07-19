import React from "react";
import "./possibility.css";
import possible from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="mzt2-possibility section-padding" id="possibility">
      <div className="mzt2-possibility-image">
        <img src={possible} alt="possible" />
      </div>
      <div className="mzt2-possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          ducimus magni nam provident delectus impedit, quam error. In
          blanditiis labore dolorum enim deserunt esse, necessitatibus quidem,
          animi qui, ipsam adipisci!
        </p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
