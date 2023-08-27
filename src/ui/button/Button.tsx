import { classNames } from "@utils";
import React from "react";
import style from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "danger" | "success" | "warning" | "disabled";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  loading: boolean;
  display: "block" | "inline_block";
  type: "normal" | "outline" | "text";
  isPressed: boolean;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  variant,
  size,
  type,
  display,
  disabled = false,
  isPressed = false,
  onClick,
}) => {
  const buttonClasses = classNames(
    style.button,
    style[variant],
    { [style["disabled"]]: disabled },
    { [style["isPressed"]]: isPressed },
    { [style["loading"]]: loading },
    style[display],
    style[type],
    style["button_" + size]
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
