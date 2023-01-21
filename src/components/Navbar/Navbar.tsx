import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="left-col">
        <div></div>
        <div className="greet-user">
          Hi <span>Mohammed</span>
          <div>4 tasks pending</div>
        </div>
      </div>
      <div className="mid-col">
        <h1>TaskDo</h1>
      </div>
      <div className="right-col">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
