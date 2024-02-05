import React from "react";
import "./Card.css";
import { useTheme } from "../context/ThemeContext";

const Card = () => {
  const { theme } = useTheme();
  return (
    <div className={`blog_post ${theme}`}>
      <div className="img_pod">
        <img
          src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
          alt="random image"
        />
      </div>
      <div className="container_copy">
        <h3>12 January 2019</h3>
        <h1>CSS Positioning</h1>
        <p>
          The position property specifies the type of positioning method used
          for an element (static, relative, absolute, fixed, or sticky).
        </p>
        <a className="btn_primary" href="#" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
