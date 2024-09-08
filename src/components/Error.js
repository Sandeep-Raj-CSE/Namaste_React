import React from "react";
import "../Design/Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          We can't seem to find the page you're looking for.
        </p>
        <a href="/" className="error-button">
          Go Back Home
        </a>
      </div>
      <div className="error-image">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Error illustration"
        />
      </div>
    </div>
  );
};

export default Error;
