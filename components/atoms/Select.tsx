import classNames from "classnames";
import React, { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
}

export const Select = (props: ISelectProps) => {
  // props
  const {
    options = [],
    error = false,
    className = "",
    disabled = false,
    ...restProps
  } = props;

  return (
    <select
      className={classNames(
        "font-geist-mono h-10 rounded-md border border-gray-400 px-4 transition-all outline-none focus:border-gray-800",
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
    >
      {options.map((option) => (
        <option
          key={option.value?.toString()}
          className="font-geist-mono text-sm"
          {...option}
        />
      ))}
    </select>
  );
};

Select.displayName = "Select";
