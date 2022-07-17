import React from "react";
import "./whatMZT2.css";
import { Feature } from "../../components";
const WhatMZT2 = () => {
  return (
    <div className="mzt2-whatmzt2 section-margin" id="wmzt2">
      <div className="mzt2-whatmzt2-feature">
        <Feature title="What is mZT-2" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ex quis ullam molestiae itaque non voluptate. Ut cumque aspernatur eum repudiandae, odio hic in ipsam dolorem aliquam, esse, similique numquam."/>
      </div>
      <div className="mzt2-whatmzt2-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imaginations
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="mzt2-whatmzt2-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ex quis ullam molestiae itaque non voluptate. Ut cumque aspernatur eum repudiandae, odio ."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ex quis ullam molestiae itaque non voluptate. Ut cumque aspernatur eum repudiandae, odio ."/>
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ex quis ullam molestiae itaque non voluptate. Ut cumque aspernatur eum repudiandae, odio hic ."/>
      </div>
    </div>
  );
};

export default WhatMZT2;
