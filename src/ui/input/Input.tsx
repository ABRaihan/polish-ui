import { CrossIcon } from "@assets/icons/cross";
import { EyeIcon } from "@assets/icons/eye";
import { SearchIcon } from "@assets/icons/search";
import { classNames } from "@utils";
import React from "react";
import { InputDefaultProps, InputProps } from "./InputTypes";
import style from "./input.module.scss";

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  disabled,
  allowClear,
  error,
  label,
  size,
  labelAction,
  helpText,
  suffix,
  prefix,
  onChange,
  onBlur,
  onFocus,
  onClear,
}) => {
  const passwordClass = {
    [style["password"]]: type === "password",
  };
  return (
    <div>
      {(label || (labelAction && labelAction.content)) && (
        <div className={style.label_action_wrapper}>
          {label && (
            <label className={classNames(style.label_text)} htmlFor={name}>
              {label}
            </label>
          )}
          {labelAction && (
            <div className={style.action_text_wrapper}>
              <a href={labelAction.url} target={labelAction.target} className={style.action_text}>
                {labelAction.content}
              </a>
            </div>
          )}
        </div>
      )}
      <div className={classNames(style.input_field_wrapper, style[size + "_input"])}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={classNames(
            style.input_field,
            error && style.error_style,
            type === "search" && style.search_icon_padding,
            suffix && style.suffix_icon_padding,
            prefix && style.prefix_icon_padding
          )}
          id={name}
        />

        {type === "password" && (
          <button className={classNames(passwordClass)}>
            <EyeIcon visible />
          </button>
        )}
        {type === "search" && (
          <button className={classNames(style.search_icon)}>
            <SearchIcon />
          </button>
        )}
        {allowClear && (
          <button className={classNames(style.cross_icon)} onClick={onClear}>
            <CrossIcon />
          </button>
        )}
        {prefix && (
          <button className={classNames(style.prefix)}>
            <SearchIcon />
          </button>
        )}
        {suffix && (
          <button className={classNames(style.suffix)}>
            <SearchIcon />
          </button>
        )}
      </div>
      {helpText && <p className={style.help_text}>{helpText}</p>}
      {error && <p className={style.error_text}> {error.message} </p>}
    </div>
  );
};

Input.defaultProps = InputDefaultProps;
type InputWithoutProps = Omit<InputProps, keyof typeof Input.defaultProps>;
type InputComponent = React.FC<InputWithoutProps> & {
  defaultProps: Partial<InputWithoutProps>;
};

const DefaultInput: InputComponent = Input as InputComponent;
DefaultInput.defaultProps = {
  ...Input.defaultProps,
};

export default DefaultInput;
