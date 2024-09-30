import React from "react";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  const getPriorityColor = (priority: Todo["priority"]) => {
    switch (priority) {
      case "Low":
        return "bg-green-800 text-green-400";
      case "Medium":
        return "bg-yellow-800 text-yellow-400";
      case "High":
        return "bg-red-800 text-red-400";
    }
  };

  return (
    <li className="flex items-center bg-gray-800 shadow-md rounded-lg p-4 mb-4">
      <button
        onClick={() => onToggle(todo.id)}
        className="w-6 h-6 border-2 border-gray-600 rounded-md mr-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {todo.completed && (
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </button>
      <div className="flex-grow flex justify-between items-center">
        <div className="flex-grow">
          <h3
            className={`text-lg font-semibold ${
              todo.completed ? "line-through text-gray-500" : "text-gray-200"
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`text-sm ${
              todo.completed ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {todo.description}
          </p>
        </div>
        <div
          className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
            todo.priority
          )} flex items-center justify-center`}
        >
          {todo.priority}
        </div>
        <p className="text-xs text-gray-500 mt-1 ml-4">Due: {todo.dueDate}</p>
      </div>
    </li>
  );
};

export default TodoItem;
