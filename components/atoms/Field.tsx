import classNames from "classnames";
import { ReactNode } from "react";

export interface IFieldProps {
  id: string;
  label: string;
  errorMsg?: string;
  required?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Field = (props: IFieldProps) => {
  // props
  const {
    id,
    label,
    children,
    className,
    errorMsg = "",
    required = false,
  } = props;

  return (
    <div className={classNames("flex flex-col", className)}>
      <label
        className={classNames("font-geist-mono mb-2 text-sm", {
          "text-red-600": !!errorMsg,
        })}
        htmlFor={id}
      >
        {label} {required ? "*" : ""}
      </label>
      {children}
      {errorMsg && (
        <span className="font-geist-mono mt-1 ml-2 text-sm text-red-600">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

Field.displayName = "Filed";
