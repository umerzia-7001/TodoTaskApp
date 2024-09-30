import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  id,
  children,
  className = "",
  ...props
}) => {
  const selectClasses =
    "w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

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
      <select id={id} className={`${selectClasses} ${className}`} {...props}>
        {children}
      </select>
    </div>
  );
};

export default Select;
