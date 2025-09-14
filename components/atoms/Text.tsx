import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "danger" | "default" | "invert" | "disabled";
}

export const Text = (props: ITextProps) => {
  // props
  const {
    children,
    className = "",
    size = "medium",
    variant = "default",
    ...restProps
  } = props;

  return (
    <p
      className={classNames(
        // default style
        "font-geist-mono",
        // size
        {
          "text-sm": size === "small",
          "text-md": size === "medium",
          "text-lg": size === "large",
        },
        // variant
        {
          "text-white": variant === "invert",
          "text-black": variant === "default",
          "text-red-500": variant === "danger",
          "text-blue-500": variant === "primary",
          "text-gray-500": variant === "disabled",
        },
        className
      )}
      title={typeof children === "string" ? children : ""}
      {...restProps}
    >
      {children}
    </p>
  );
};

Text.displayName = "Text";
