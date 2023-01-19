import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <div>
        <span>SVG</span>
        <div className="greet-user">
          Hi <span>Mohammed</span>
        </div>
        <div className="taskPending">4 tasks pending</div>
      </div>
      <div>TaskDo</div>
      <div>Logout</div>
    </div>
  );
};

export default Navbar;
