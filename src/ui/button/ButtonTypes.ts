export interface ButtonProps {
  children?: React.ReactNode;
  variant: "primary" | "danger" | "success" | "warning" | "disabled";
  size: "sm" | "md" | "lg";
  display: "block" | "inline_block";
  type: "normal" | "outline" | "text";
  disabled: boolean;
  loading: boolean;
  isPressed: boolean;
  onClick?: () => void;
}

export const ButtonDefaultProps: ButtonProps = {
  variant: "primary",
  size: "md",
  display: "inline_block",
  type: "normal",
  disabled: false,
  loading: false,
  isPressed: false,
};
