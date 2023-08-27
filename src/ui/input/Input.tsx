import React from "react";
type Error = {
  status: boolean;
  message: string;
};
interface InputProps {
  type: "text" | "email" | "password" | "number" | "tel";
  value: string | number;
  placeholder: string;
  disabled: boolean;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error: Error;
  label: string;
}

const Input: React.FC<InputProps> = ({ type }) => {
  return (
    <div>
      <input type={type} />
    </div>
  );
};
export default Input;
