import React from "react";
import "./HomePage.scss";
const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>TaskDo</h1>
      <p>Manage You Task List easily</p>
      <button className="btn-main">Let's start</button>
      <button className="btn-sub">register</button>
    </div>
  );
};

export default HomePage;
