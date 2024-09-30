import React from "react";
import Modal from "./components/layout/modal";
import TodoButton from "./components/todo/todoButton";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import Toast from "./components/ui/Toast";
import { useTodoAppToast } from "./hooks/useToast.ts";

const App: React.FC = () => {
  const {
    isModalOpen,
    openModal,
    toast,
    hideToast,
    todos,
    handleAddTodoSuccess,
    handleCancel,
  } = useTodoAppToast();

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center py-[20vh]">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
        <div className="flex justify-center mb-6">
          <TodoButton onClick={openModal} />
        </div>
        <div className="w-full">
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <p className="text-center mt-8 text-xl">
              No todos yet. Add one to get started!
            </p>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} title="Add New Todo">
        <TodoForm onSuccess={handleAddTodoSuccess} onCancel={handleCancel} />
      </Modal>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
};

export default App;
