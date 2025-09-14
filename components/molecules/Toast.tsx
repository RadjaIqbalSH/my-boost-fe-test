import classNames from "classnames";
import React from "react";

export interface IToastProps {
  id?: string;
  variant: "success" | "error";
  msg: string;
}

export const Toast = (props: IToastProps) => {
  // props
  const { id, variant, msg } = props;

  return (
    <div
      id={id}
      className={classNames(
        "font-geist-mono w-fit rounded-sm px-4 py-2 text-white",
        {
          "bg-green-600": variant === "success",
          "bg-red-600": variant === "error",
        }
      )}
    >
      {msg}
    </div>
  );
};

Toast.displayName = "Toast";
