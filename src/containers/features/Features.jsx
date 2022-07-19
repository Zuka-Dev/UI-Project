import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distruts instantly",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis, eligendi sequi quas sunt, dolorem praesentium earum officiis voluptate.",
  },
  {
    title: "Become the tended active",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis, eligendi sequi quas sunt, dolorem praesentium earum officiis voluptate.",
  },
  {
    title: "Message or I am nothing",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis, eligendi sequi quas sunt, dolorem praesentium earum officiis voluptate.",
  },
  {
    title: "Run as fast as you can",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis, eligendi sequi quas sunt, dolorem praesentium earum officiis voluptate.",
  },
];
const Features = () => {
  return (
    <div className="mzt2-feature section-padding" id="features">
      <div className="mzt2-feature-heading">
        <h1 className="gradient-text">
          The Future is Now and You Just Need To Realize it. Step into the
          Future Today & Make It Happen.
        </h1>
        <p>Request Early Acess To Get Confirmed</p>
      </div>
      <div className="mzt2-feature-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
        l
      </div>
    </div>
  );
};

export default Features;
