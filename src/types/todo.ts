export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  completed: boolean;
}

export type NewTodo = Omit<Todo, "id" | "completed">;

export type Priority = "Low" | "Medium" | "High";
