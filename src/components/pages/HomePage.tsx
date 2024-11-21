import React from "react";
import TodoInput from "./HomePageSections/TodoInput";
import TodoItems from "./HomePageSections/TodoItems";

const HomePage = () => {
  return (
    <div>
      <TodoInput />
      <TodoItems />
    </div>
  );
};

export default HomePage;
