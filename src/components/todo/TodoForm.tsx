import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { Priority, Todo } from "../../types/todo";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Select from "../ui/select";
import Button from "../ui/button";

interface TodoFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSuccess, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const isFormValid = () => {
    return (
      title.trim() !== "" && description.trim() !== "" && dueDate.trim() !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    onSuccess();
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <Input
        label="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <Select
        label="Priority"
        value={priority}
        required
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </Select>
      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        required
        onChange={(e) => setDueDate(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </Form>
  );
};

export default TodoForm;
