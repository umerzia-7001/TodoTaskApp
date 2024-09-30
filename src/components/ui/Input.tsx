import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  className = "",
  ...props
}) => {
  const inputClasses =
    "w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue";

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <input id={id} className={`${inputClasses} ${className}`} {...props} />
    </div>
  );
};

export default Input;
