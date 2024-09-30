import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ToastType = "success" | "error";

interface Toast {
  message: string;
  type: ToastType;
}

export const useTodoAppToast = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const todos = useSelector((state: RootState) => state.todos);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type });
  };

  const hideToast = () => setToast(null);

  const handleAddTodoSuccess = () => {
    closeModal();
    showToast("Todo added successfully!", "success");
  };

  const handleCancel = () => {
    closeModal();
    showToast("Todo creation cancelled", "error");
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toast,
    hideToast,
    todos,
    handleAddTodoSuccess,
    handleCancel,
  };
};
