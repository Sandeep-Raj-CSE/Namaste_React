import React from "react";
// import "./About.css";

import User from "./User";


import UserClass from "./UserClass";
import "../Design/About.css"


import "../Design/User.css"; // Import User.css here




const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our food delivery service! We connect you with the best restaurants in your area, delivering fresh and delicious meals right to your door. Whether you're craving a hearty breakfast, a quick lunch, or a gourmet dinner, we've got you covered.
        </p>
        <p className="about-description">
          Our mission is to make food ordering as simple and satisfying as possible. With a wide range of cuisines, easy payment options, and fast delivery, we're here to satisfy your hunger anytime, anywhere.
        </p>

        {/* <User  name = {"sandeep user"} /> */}


        <UserClass name={"sandeep userclass name"} />
      </div>
      <div className="about-image">
        <img
          src="https://blog.swiggy.com/wp-content/uploads/2021/11/Banners_Blog-1-scaled.jpg"
          alt="Delicious food"
        />
      </div>
    </div>
  );
};

export default About;
