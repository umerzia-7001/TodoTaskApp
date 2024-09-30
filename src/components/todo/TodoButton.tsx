import React from "react";
import Button from "../ui/button";

interface TodoButtonProps {
  onClick: () => void;
}

const TodoButton: React.FC<TodoButtonProps> = ({ onClick }) => (
  <Button onClick={onClick}>Add Task</Button>
);

export default TodoButton;
