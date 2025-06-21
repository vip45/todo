import React from "react";
import "./User.css";
const User = () => {
  return (
    <div className="user-main">
      <div className="user-profile">
        <img
          className="img-fluid"
          src="./resources/images/vipin.png"
          alt="Vipin"
        />
      </div>
      <div className="user-data">
        <p className="user-name">Vipin Yadav</p>
        <p className="user-des">Frontend Developer Trainee</p>
      </div>
    </div>
  );
};

export default User;
