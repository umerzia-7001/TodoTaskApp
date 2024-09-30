import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTodo, removeTodo } from "../../store/todoSlice";
import TodoItem from "./todoItem";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 500);
  };

  return (
    <ul className="space-y-3 w-full">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
