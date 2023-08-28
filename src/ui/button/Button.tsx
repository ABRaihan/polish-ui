import { Spinner } from "@ui/spinner";
import { classNames } from "@utils";
import React from "react";
import { ButtonDefaultProps, ButtonProps } from "./ButtonTypes";
import style from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant,
  size,
  type,
  display,
  disabled,
  isPressed,
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
      {loading ? <Spinner size={size} /> : children}
    </button>
  );
};
Button.defaultProps = ButtonDefaultProps;
type ButtonWithoutProps = Omit<ButtonProps, keyof typeof Button.defaultProps>;
type ButtonComponent = React.FC<ButtonWithoutProps> & {
  defaultProps: Partial<ButtonWithoutProps>;
};

const DefaultButton: ButtonComponent = Button as ButtonComponent;
DefaultButton.defaultProps = {
  ...Button.defaultProps,
};
export default DefaultButton;
