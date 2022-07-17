import React from "react";
import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <div className="mzt2-features-container-features">
      <div className="mzt2-features-container-features-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="mzt2-features-container-features-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
