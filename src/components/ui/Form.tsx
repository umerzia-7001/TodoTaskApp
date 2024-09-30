import React, { FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className = "",
  ...props
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
