import React from "react";
export type ErrorType = {
  status: boolean;
  message: string;
};

export type LabelActionType = {
  content: string;
  url?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onAction?: () => void;
  onMouseEnter?: () => void;
};

export interface InputProps {
  type: "text" | "email" | "password" | "number" | "tel" | "search";
  size: "sm" | "md" | "lg";
  name?: string;
  placeholder: string;
  label?: string;
  helpText?: string;
  value?: string | number;
  maxLength?: number;
  disabled?: boolean;
  labelHidden?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  error?: ErrorType;
  labelAction?: LabelActionType;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
}

export const InputDefaultProps: InputProps = {
  type: "text",
  size: "md",
  placeholder: "Placeholder",
  label: "Label",
};
