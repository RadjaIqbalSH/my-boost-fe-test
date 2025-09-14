import classNames from "classnames";
import React, { TextareaHTMLAttributes } from "react";

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const TextArea = (props: ITextAreaProps) => {
  // props
  const {
    error = false,
    className = "",
    disabled = false,
    ...restProps
  } = props;

  return (
    <textarea
      className={classNames(
        "placeholder:font-geist-mono font-geist-mono resize rounded-md border border-gray-400 px-4 py-2 transition-all outline-none placeholder:text-sm focus:border-gray-800",
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

TextArea.displayName = "TextArea";
