import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const baseClasses =
    "fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white flex items-center";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
