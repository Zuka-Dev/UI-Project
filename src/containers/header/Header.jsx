import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="mzt2-header section-padding" id="home">
      <div className="mzt2-header-content">
        <h1 className="gradient-text">
          Let's Build Something amazing with mZT-2 OpenAI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          neque architecto non mollitia odio, itaque iusto tempore tenetur sequi
          quisquam, impedit voluptates dolorem laborum exercitationem iste
          consectetur, reprehenderit laudantium ut!
        </p>
        <div className="mzt2-header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="mzt2-header-content-people">
          <img src={people} alt="people" />
          <p>500 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="mzt2-header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
