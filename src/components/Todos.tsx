import React, { FC } from "react";
import TodoItem from "./TodoItem";

const Todos: FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items?.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
