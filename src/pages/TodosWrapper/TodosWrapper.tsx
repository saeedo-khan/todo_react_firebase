import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewTask from "../../components/NewTask/NewTask";
import TodoList from "../../components/TodoList/TodoList";
import "./TodosWrapper.scss";
const todos = [
  { id: 1, task: "clean the house", completed: false },
  { id: 2, task: "write navbar section", completed: false },
  { id: 3, task: "solve leetcode proplems", completed: false },
];

const TodosWrapper: React.FC = () => {
  return (
    <div className="TodoWrapper">
      <Navbar />
      <NewTask />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
};

export default TodosWrapper;
