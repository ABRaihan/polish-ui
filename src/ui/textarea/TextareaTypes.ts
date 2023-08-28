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

export interface TextareaProps {
  name?: string;
  value: string | number;
  placeholder: string;
  maxLength?: number;
  disabled: boolean;
  error: ErrorType;
  label?: string;
  labelAction: LabelActionType;
  labelHidden?: boolean;
  helpText: string;
  allowClear?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
}
