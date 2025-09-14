import { UpdateIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  shape?: "circle" | "default";
  variant?: "primary" | "secondary" | "danger";
}

export const Button = (props: IButtonProps) => {
  // props
  const {
    children,
    className = "",
    loading = false,
    disabled = false,
    shape = "default",
    variant = "primary",
    ...restProps
  } = props;

  return (
    <button
      className={classNames(
        // default
        "font-geist-sans flex h-10 w-fit cursor-pointer items-center justify-center border-2 px-3 text-sm font-semibold transition-all duration-200 active:scale-95",
        // variant
        {
          "border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600":
            variant === "primary",
          "border-blue-500 bg-transparent text-blue-500 hover:border-blue-600 hover:bg-gray-100":
            variant === "secondary",
          "border-red-500 bg-red-500 text-white hover:border-red-600 hover:bg-red-600":
            variant === "danger",
        },
        // shape
        {
          "!w-[40px] rounded-full !px-0": shape === "circle",
          "rounded-md": shape === "default",
        },
        // disabled
        {
          "!cursor-not-allowed !border-gray-300 !bg-gray-300 !text-gray-500 active:!scale-100":
            disabled || loading,
        },
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...restProps}
    >
      {loading && shape === "default" && (
        <UpdateIcon className="mr-2 animate-spin" />
      )}
      {children}
    </button>
  );
};

Button.displayName = "Button";
