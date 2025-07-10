import React, { FC } from "react";

const TodoItem: FC<{ item?: string }> = (props) => {
  return <div>{props.item}</div>;
};

export default TodoItem;
