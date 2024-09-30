import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
