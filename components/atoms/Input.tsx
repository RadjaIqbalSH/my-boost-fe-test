import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = (props: IInputProps) => {
  // props
  const {
    error = false,
    className = "",
    disabled = false,
    ...restProps
  } = props;

  return (
    <input
      className={classNames(
        "placeholder:font-geist-mono font-geist-mono h-10 rounded-md border border-gray-400 px-4 transition-all outline-none placeholder:text-sm focus:border-gray-800",
        // error
        {
          "!border-red-600": error,
        },
        // disabled
        {
          "bg-gray-200": disabled,
        },
        className
      )}
      disabled={disabled}
      {...restProps}
    />
  );
};

Input.displayName = "Input";
