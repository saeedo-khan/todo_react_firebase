import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import "./../src/App.scss";
import TodosWrapper from "./pages/TodosWrapper/TodosWrapper";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <HomePage /> */}
        <TodosWrapper />
      </div>
    </div>
  );
}

export default App;
